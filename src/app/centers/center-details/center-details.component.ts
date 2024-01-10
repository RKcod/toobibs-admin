import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';
import {PageEvent} from '@angular/material/paginator';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit {


  users = [];
  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: void;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CenterDetailsComponent>,public api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadUsers(null);
  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

  loadUsers($event:PageEvent){
    this.spinner.show();
    this.api.performGETCall("users", $event == null ? null :{pageIndex: $event.pageIndex+1}, true).subscribe(res=> {
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
