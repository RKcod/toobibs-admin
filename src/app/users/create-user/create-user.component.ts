import {Component, Inject, OnInit , ChangeDetectorRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ApiService} from '../../api/api.service';
import {PageEvent} from '@angular/material/paginator';

declare const window: any;

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    //user:any = null;
    centers = [];
    specialities = [];

    user: any = {
        'first_name': '',
        'last_name': '',
        'email': '',
        'gender': 'Masculin',
        'user_type': 'PATIENT',
        'address': '',
        'centers_id': 0,
        'phones': '',
        'speciality': '',
        'password': null,
        'do_teleconsult': false,
        'doctor_serial_number': '',
        'status':false
    };
  
    tel = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<CreateUserComponent>,
                private api: ApiService,
                private cdr: ChangeDetectorRef,
                private spinner: NgxSpinnerService) {
        this.getSpecialities();
    }


    ngOnInit(): void {
        this.loadCenters();

        var input = document.querySelector('#phone');
        const $this = this;
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performGETCall('users/' + this.data.id, null, true).subscribe(res => {
                //console.log(res);
                this.spinner.hide();
                this.user = {
                    'first_name': res.data.first_name,
                    'last_name': res.data.last_name,
                    'email': res.data.email,
                    'gender': res.data.gender,
                    'user_type': res.data.user_type,
                    'address': res.data.address,
                    'phone': res.data.phone,
                    'centers_id': res.data.center_id,
                    'phones': res.data.phone,
                    'password': null,
                    'speciality': res.data.speciality,
                    'doctor_serial_number': res.data.doctor_serial_number,
                    'status' : res.data.status
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
                if(err.error.errors["email"])
                    this.api.handleErrors(err.error.errors["email"]);
                else if(err.error.errors["phone_login"])
                    this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                else
                    this.api.handleErrors(err.error.message);
                //this.api.handleErrors(err.error.message);
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

   

    loadCenters() {
        this.spinner.show();
        this.api.performGETCall('centers?limit=0', null, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.centers = res.data;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }


    getSpecialities() {
        this.api.performGETCall('getspecialities?limit=0', null, true).subscribe(res => {
            //console.log(res);
            this.specialities = res.data;
        }, err => {
            //console.log(err.error);
            this.api.handleErrors(err.error.message);
        });
    }

    saveUser() {
        if (this.user.first_name.length > 0 && this.user.last_name.length > 0) {
            if (this.user.user_type == 'DOCTOR' && (this.user.speciality.length == 0)){// || this.user.doctor_serial_number.length == 0)) {
                this.api.handleErrors('Veuillez renseigner tous les champs obligatoires!');
                //console.log('Veuillez renseigner tous les champs!');
                return;
            }
            /*if ( this.user.email.length > 0 && !this.api.isValidEmail(this.user.email)) {
                this.api.handleErrors('Email invalide!');
                this.user.email = null;
                return;
            }*/
            if(this.user.user_type != 'ADMIN'){
                var countryData = this.tel.getSelectedCountryData();
                if (countryData.dialCode != 225 && !this.tel.isValidNumber()) {
                    this.api.handleErrors('Numéro de téléphone invalide!');
                    return;
                } else {
                    this.user.phone = countryData.dialCode == 225 ? (this.tel.getNumber().toString().indexOf('225') != -1 ? this.tel.getNumber().toString().replace('+', '') : '225' + this.tel.getNumber().toString().replace('+', '')) : this.tel.getNumber().toString().replace('+', '');
                    var countryData = this.tel.getSelectedCountryData();
                    this.user.phone_login = this.tel.getNumber().toString().replace("+"+countryData.dialCode, "");
                }
            }

            //console.log(this.data.phone);
            if (this.user.user_type == 'DOCTOR') {
                this.user.center_id = this.user.centers_id;
            }
            //this.user.phone = this.user.phones;
            if (this.data.id != null) {
                this.spinner.show();
                if(this.user.password == null)
                    this.user.password = null;
                this.api.performPUTCall('users/' + this.data.id, this.user, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Utilisateur mise à jour avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    if(err.error.errors && err.error.errors["email"])
                        this.api.handleErrors(err.error.errors["email"]);
                    else if(err.error.errors && err.error.errors["phone_login"])
                        this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                    else
                        this.api.handleErrors(err.error.message);
                });
            } else {
                if(this.user.user_type != 'ADMIN')
                    this.user.password = this.api.generatePassword();
                //console.log('Password', this.user.password);
                this.spinner.show();
                this.api.performPOSTCall(this.user.user_type == "ADMIN" ? "admins" : 'register', this.user, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Utilisateur crée avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    if(err.error.errors && err.error.errors["email"])
                        this.api.handleErrors(err.error.errors["email"]);
                    else if(err.error.errors && err.error.errors["phone_login"])
                        this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                    else
                        this.api.handleErrors(err.error.message);
                });
                
            }
        } else {
            //console.log('Veuillez renseigner tous les champs!');
            this.api.handleErrors('Veuillez renseigner tous les champs!');
        }
    }

    closeDialog(msg) {
        this.dialogRef.close(msg);
    }

    toggleStatus() {
        this.user.status = !this.user.status; 
        this.cdr.detectChanges();
    }

}
