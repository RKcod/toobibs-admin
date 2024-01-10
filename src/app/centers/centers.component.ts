import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxSpinnerService} from 'ngx-spinner';
import {PageEvent} from '@angular/material/paginator';
import {CreateUserComponent} from '../users/create-user/create-user.component';
import {ConfirmCenterDeleteComponent} from './confirm-delete/confirm-delete.component';
import {CreateCenterComponent} from './create-center/create-center.component';
import {OpenMapComponent} from './open-map/open-map.component';
import {DoctorsInCenterComponent} from './doctors-in-center/doctors-in-center.component';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {


  centers = [];
  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: void;

  constructor(public api: ApiService, private dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadCenters(null);
  }

  loadCenters($event:PageEvent){
    this.spinner.show();
    this.api.performGETCall("centers", $event == null ? null :{orderBy:"name",page: $event.pageIndex+1}, true).subscribe(res=> {
      //console.log(res);
      this.spinner.hide();
      this.centers = res.data;
      this.meta = res.meta;
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }

  openEdit(id){
    let dialogRef = this.dialog.open(CreateCenterComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == "success")
        this.loadCenters(null);
    });
  }

  openDoctors(center_id){
    let dialogRef = this.dialog.open(DoctorsInCenterComponent, {
      data: { center_id: center_id },
      disableClose: true,
        height: '70%',
        width: '70%'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }


  openMap(lat, lng) {
    let dialogRef = this.dialog.open(OpenMapComponent, {
      data: {lat: parseFloat(lat), lng: parseFloat(lng), draggable: false},
      height: '70%',
      width: '70%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != 'cancel') {
        const res = JSON.parse(result);
        //this.center.lat = res.lat;
        //this.center.lng = res.lng;
      }
    });
  }

  delete(id){
    let dialogRef = this.dialog.open(ConfirmCenterDeleteComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == "success")
        this.loadCenters(null);
    });
  }

}
