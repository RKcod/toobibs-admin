import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-doctors-in-center',
  templateUrl: './doctors-in-center.component.html',
  styleUrls: ['./doctors-in-center.component.css']
})
export class DoctorsInCenterComponent implements OnInit {


  users = [];
  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: void;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DoctorsInCenterComponent>,public api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadUsers(null);
  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

  loadUsers($event:PageEvent){
    this.spinner.show();
    this.api.performGETCall("users", $event == null ? {search:"center_id:"+this.data.center_id} :{pageIndex: $event.pageIndex+1, search:"center_id:"+this.data.center_id}, true).subscribe(res=> {
      //console.log(res);
      this.spinner.hide();
      this.users = res.data;
      this.meta = res.meta;
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }

}
