import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxSpinnerService} from 'ngx-spinner';
import {PageEvent} from '@angular/material/paginator';
import {CreateCenterComponent} from '../centers/create-center/create-center.component';
import {DoctorsInCenterComponent} from '../centers/doctors-in-center/doctors-in-center.component';
import {OpenMapComponent} from '../centers/open-map/open-map.component';
import {ConfirmCenterDeleteComponent} from '../centers/confirm-delete/confirm-delete.component';
import {CreateSpecialityComponent} from './create-speciality/create-speciality.component';
import {ConfirmDeleteSpecialityComponent} from './confirm-delete-speciality/confirm-delete-speciality.component';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {


  specialities = [];
  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: void;

  constructor(public api: ApiService, private dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadSpecialities(null);
  }

  loadSpecialities($event:PageEvent){
    this.spinner.show();
    this.api.performGETCall("getspecialities", $event == null ? null :{orderBy:"name",page: $event.pageIndex+1}, true).subscribe(res=> {
      //console.log(res);
      this.spinner.hide();
      this.specialities = res.data;
      this.meta = res.meta;
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }

  openEdit(id){
    let dialogRef = this.dialog.open(CreateSpecialityComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == "success")
        this.loadSpecialities(null);
    });
  }



  delete(id){
    let dialogRef = this.dialog.open(ConfirmDeleteSpecialityComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == "success")
        this.loadSpecialities(null);
    });
  }


}
