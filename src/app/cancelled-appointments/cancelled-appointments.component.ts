import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {ApiService} from '../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-cancelled-appointments',
  templateUrl: './cancelled-appointments.component.html',
  styleUrls: ['./cancelled-appointments.component.css']
})
export class CancelledAppointmentsComponent implements OnInit {

  consultations = [];

  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: PageEvent;
  constructor(public api: ApiService, private dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadConsultations(null);
  }

  loadConsultations($event:PageEvent){
    this.spinner.show();
    const params:any = {orderBy:"created_at",sortedBy:"desc",search: 'status:3',include: 'doctor,user'};
    if($event != null)
      params.page = $event.pageIndex+1;
    this.api.performGETCall("appointments", params, true).subscribe(res=> {
      //console.log("consultations : ",res);
      this.spinner.hide();
      this.consultations = res.data;
      this.meta = res.meta;
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
    return $event;
  }

  remboursser(id, status) {
    this.spinner.show();
    this.api.performPATCHCall("appointments/" + id, {status: status, rembourssement: true}, false, true).subscribe(res => {
      this.spinner.hide();
      this.loadConsultations(this.pageEvent);
      this.api.displayMessage("Succès", "Rembourssement enregistré avec succès");
      //console.log(res);
    }, err => {
      this.spinner.hide();
      //console.log(err.error);
      this.api.handleErrors(err.error.message);
    });
  }
}
