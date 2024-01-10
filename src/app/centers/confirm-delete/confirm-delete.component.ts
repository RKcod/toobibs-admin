import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmCenterDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmCenterDeleteComponent>,
              private api: ApiService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  closeDialog(msg) {
    this.dialogRef.close(msg);
  }


  deleteCenter() {
    if(this.data.id != null){
      this.spinner.show();
      this.api.performDELETECall("centers/"+this.data.id, true).subscribe(res=> {
        this.spinner.hide();
        this.api.displayMessage("Succès", "Centre supprimé avec succès");
        this.closeDialog('success');
      }, err=>{
        this.api.handleErrors(err.error.message);
      });
    }
  }

}
