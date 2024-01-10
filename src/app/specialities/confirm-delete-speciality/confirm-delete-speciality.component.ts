import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-confirm-delete-speciality',
  templateUrl: './confirm-delete-speciality.component.html',
  styleUrls: ['./confirm-delete-speciality.component.css']
})
export class ConfirmDeleteSpecialityComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmDeleteSpecialityComponent>,
              private api: ApiService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  closeDialog(msg) {
    this.dialogRef.close(msg);
  }


  deleteSpecialities() {
    if(this.data.id != null){
      this.spinner.show();
      this.api.performDELETECall("specialities/"+this.data.id, true).subscribe(res=> {
        this.spinner.hide();
        this.api.displayMessage("Succès", "Spécialité supprimée avec succès");
        this.closeDialog('success');
      }, err=>{
        this.api.handleErrors(err.error.message);
      });
    }
  }
}
