import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {OpenMapComponent} from '../../centers/open-map/open-map.component';

@Component({
  selector: 'app-create-speciality',
  templateUrl: './create-speciality.component.html',
  styleUrls: ['./create-speciality.component.css']
})
export class CreateSpecialityComponent implements OnInit {

  speciality: any = {
    'name': '',
    'description': ''
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateSpecialityComponent>,
              private api: ApiService,
              private dialog: MatDialog,
              private spinner: NgxSpinnerService) {
  }


  ngOnInit(): void {
    if (this.data.id != null) {
      this.spinner.show();
      this.api.performGETCall('specialities/' + this.data.id, null, true).subscribe(res => {
        //console.log(res);
        this.spinner.hide();
        this.speciality = {
          'name': res.data.name,
          'description': res.data.description
        };
      }, err => {
        this.spinner.hide();
        this.api.handleErrors(err.error.message);
      });
    }
  }

  saveSpeciality() {
    //console.log(this.speciality);
    if(this.speciality.name.length > 0){

      if (this.data.id != null) {
        this.spinner.show();
        this.api.performPATCHCall('specialities/' + this.data.id, this.speciality, false, true).subscribe(res => {
          this.spinner.hide();
          this.api.displayMessage('Succès', 'Spécialité mise à jour avec succès');
          this.closeDialog('success');
        }, err => {
          this.spinner.hide();
          this.api.handleErrors(err.error.message);
        });
      }
      else {
        this.spinner.show();
        this.api.performPOSTCall('specialities', this.speciality, false, true).subscribe(res => {
          this.spinner.hide();
          this.api.displayMessage('Succès', 'Spécialité créée avec succès');
          this.closeDialog('success');
        }, err => {
          this.spinner.hide();
          this.api.handleErrors(err.error.message);
        });
      }
    }
    else {
      this.api.handleErrors("Veuillez renseigner tous les champs!");
    }


  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

}
