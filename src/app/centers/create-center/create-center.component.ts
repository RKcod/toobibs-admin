import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {OpenMapComponent} from '../open-map/open-map.component';

declare const window: any;

@Component({
    selector: 'app-create-center',
    templateUrl: './create-center.component.html',
    styleUrls: ['./create-center.component.css']
})
export class CreateCenterComponent implements OnInit {


    center: any = {
        'name': '',
        'address': '',
        'lat': '',
        'lng': '',
        'phone': '',
        'email': '',
        'center_type_id': '0',
    };
    tel = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<CreateCenterComponent>,
                private api: ApiService,
                private dialog: MatDialog,
                private spinner: NgxSpinnerService) {
    }


    ngOnInit(): void {

        var input = document.querySelector('#phone');
        const $this = this;
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performGETCall('centers/' + this.data.id, null, true).subscribe(res => {
                //console.log(res);
                this.spinner.hide();
                this.center = {
                    'name': res.data.name,
                    'address': res.data.address,
                    'lat': res.data.lat,
                    'lng': res.data.lng,
                    'phones': res.data.phone,
                    'email': res.data.email,
                    'center_type_id': res.data.center_type_id,
                };
                setTimeout(() => {
                    $this.tel = window.intlTelInput(input, {
                        initialCountry: 'CI',
                        utilsScript: 'assets/js/utils.js',
                    });
                    //console.log(res.data.phone);
                    $this.tel.setNumber('+' + res.data.phone);
                    //console.log($this.tel.getNumber());
                }, 3000);
            }, err => {
                this.spinner.hide();
                this.api.handleErrors(err.error.message);
            });
        } else {
            setTimeout(() => {
                var input = document.querySelector('#phone');
                this.tel = window.intlTelInput(input, {
                    initialCountry: 'CI',
                    utilsScript: 'assets/js/utils.js',
                });
            }, 3000);
        }
    }

    saveCenter() {
        
        if (this.center.name.length > 0 && this.center.address.length > 0 && this.center.email.length > 0 && this.center.lat.toString().length > 1 && this.center.lng.toString().length > 1) {

            var countryData = this.tel.getSelectedCountryData();
                if (countryData.dialCode != 225 && !this.tel.isValidNumber()) {
                    this.api.handleErrors('Numéro de téléphone invalide!');
                    return;
                } else {
                    this.center.phone = countryData.dialCode == 225 ? (this.tel.getNumber().toString().indexOf('225') != -1 ? this.tel.getNumber().toString().replace('+', '') : '225' + this.tel.getNumber().toString().replace('+', '')) : this.tel.getNumber().toString().replace('+', '');
                    var countryData = this.tel.getSelectedCountryData();
                    this.center.phone_login = this.tel.getNumber().toString().replace("+"+countryData.dialCode, "");
                }

            if (!this.api.isValidEmail(this.center.email)) {
                this.api.handleErrors('Email invalide!');
                return;
            }
            //this.center.phone = this.center.phones;  
            if (this.data.id != null) {
                this.spinner.show();
                this.api.performPATCHCall('centers/' + this.data.id, this.center, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Centre mise à jour avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            } else {
                this.center.password = this.api.generatePassword();
                //console.log('Password', this.center.password);
                this.spinner.show();
                this.api.performPOSTCall('centers', this.center, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Centre crée avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            }
        } else {
            this.api.handleErrors('Veuillez renseigner tous les champs!');
        }


    }

    closeDialog(msg) {
        this.dialogRef.close(msg);
    }

    openMap() {
        let dialogRef = this.dialog.open(OpenMapComponent, {
            data: {lat: this.center != null ? this.center.lat : 0, lng: this.center != null ? this.center.lng : 0, draggable: true},
            height: '70%',
            width: '70%'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != 'cancel') {
                const res = JSON.parse(result);
                this.center.lat = res.lat;
                this.center.lng = res.lng;
            }
        });
    }
}
