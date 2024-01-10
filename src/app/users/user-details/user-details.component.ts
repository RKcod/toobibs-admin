import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ApiService} from '../../api/api.service';
import {PageEvent} from '@angular/material/paginator';
import { DatePipe } from '@angular/common'


interface Sms{
  title?:string,
  type?:string,
  message?:string,
  id?:string,
  doctor_id?:number,
  real_id?:number,
  created_at?:any,
  updated_at?:any,
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user : any = null;

  id = null;
  month = 0;
  year = 0;
  months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  years = [];
  consultations = [];
  usermetas = [];
  prices = [];
  loader_consultation = false;
  loader_user_metas = false;
  loader_settings = false;
  settings: any = null;

  meta:any = {
    pagination : {
      count: 0,
      per_page: 10
    }
  };
  pageEvent: void;

  setting_data = {
    fees: '0',
    fees_type: 'PERCENT',
    price_cabinet_consultation: '0',
    price_teleconsultation: '0',
    price_house_consultation: '0',
    currency: 'XAF',

  };

  gains = {
    cost : 0,
    fees : 0,
    currency: "XAF"
  };
  smsList : Sms[];
  smsMessage: string;
  sms: Sms ={
    message:'',
  };

  constructor(public api: ApiService, public datepipe: DatePipe, private spinner: NgxSpinnerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.month = m;
    this.year = y;
    this.years = [y-4, y-3,y-2,y-1,y];
    this.activatedRoute.queryParams.subscribe(params=> {
      if(params.id !== null){
        this.id = params.id;
        this.loadUser();
        
      }
    });
  }

  loadUser(){
    this.spinner.show();
    this.api.performGETCall("users/"+this.id, null, true).subscribe(res=> {
      //console.log(res);
      this.spinner.hide();
      this.user = res.data;
      this.loadConsultations(null);
      if(this.user.user_type == "DOCTOR"){
        this.loadSum();
        this.loadUserMetas();
        this.loadSettings();
        this.getSMS();  
      }

    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }

  calcFees(){
    let fee = parseFloat(this.settings.fees);
    this.gains.fees = this.settings.fees_type == "FIXED" ? fee : this.gains.cost * (fee/100);
  }

  loadSum(calc = false){
    //this.loader_consultation = true;
    //var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(this.year, this.month, 1);
    var lastDay = new Date(this.year, this.month + 1, 0);
    if(calc)
      this.spinner.show();
    this.api.performGETCall("searchappointments", {limit:0,field: this.user.user_type == "DOCTOR" ? "doctor_id" : "users_id", value:this.user.real_id, start: this.datepipe.transform(firstDay, 'yyyy-MM-dd'),end:this.datepipe.transform(lastDay, 'yyyy-MM-dd')}, true).subscribe(res=> {
      //console.log("sum : ",res);
      this.gains.cost = res.data.cost;
      //this.gains.fees = res.data.status;
      this.gains.currency = res.data.currency;
      if(calc)
        this.spinner.hide();
      if(calc)
        this.calcFees();
      //this.loader_consultation = false;
      //this.consultations = res.data;
    }, err => {
      //this.loader_consultation = false;
      this.api.handleErrors(err.error.message);
    });
  }
  loadConsultations($event:PageEvent){
    this.loader_consultation = true;
    const params:any = {orderBy:"created_at",sortedBy:"desc",search: this.user.user_type == "DOCTOR" ? "doctor_id:"+this.user.real_id : "users_id:"+this.user.real_id};
    if($event != null)
      params.page = $event.pageIndex+1;
    this.api.performGETCall("appointments", params, true).subscribe(res=> {
      //console.log("consultations : ",res);
      this.loader_consultation = false;
      this.consultations = res.data;
      this.meta = res.meta;
    }, err => {
      this.loader_consultation = false;
      this.api.handleErrors(err.error.message);
    });
  }

  loadUserMetas(){
    this.loader_user_metas = true;
    this.api.performGETCall("usermetas", {search: "doctor_id:"+this.user.real_id}, true).subscribe(res=> {
      //console.log("user metas : ",res);
      this.loader_user_metas = false;
      this.usermetas = res.data;
    }, err => {
      this.loader_user_metas = false;
      this.api.handleErrors(err.error.message);
    });
  }

  loadSettings(){
    this.loader_settings = true;
    this.api.performGETCall("prices", {search: "doctor_id:"+this.user.real_id}, true).subscribe(res=> {
      //console.log("settings :  : ",res);
      this.loader_settings = false;
      this.settings = res.data[0];
      this.setting_data.fees = this.settings.fees;
      this.setting_data.fees_type = this.settings.fees_type;
      this.setting_data.currency = this.settings.currency;
      this.setting_data.price_cabinet_consultation = this.settings.price_cabinet_consultation;
      this.setting_data.price_teleconsultation = this.settings.price_teleconsultation;
      this.setting_data.price_house_consultation = this.settings.price_house_consultation;
      this.calcFees();
    }, err => {
      this.loader_settings = false;
      this.api.handleErrors(err.error.message);
    });
  }


  saveFees() {
    this.spinner.show();
    this.settings.fees = this.setting_data.fees;
    this.settings.fees_type = this.setting_data.fees_type;

    this.setting_data.price_cabinet_consultation = this.settings.price_cabinet_consultation;
    this.setting_data.price_teleconsultation = this.settings.price_teleconsultation;
    this.setting_data.price_house_consultation = this.settings.price_house_consultation;
    this.setting_data.currency = this.settings.currency;

    this.api.performPUTCall("prices/"+this.settings.id, this.setting_data, false, true).subscribe(res=> {
      //console.log("user metas : ",res);
      this.spinner.hide();
      this.settings = res.data;
      this.calcFees();
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }
  getSMS(){
    return this.api.performGetRequest('sms?search=doctor_id:'+this.user.real_id)
      .then(({data}:{data:Sms[]})=>{
      this.smsList = data;
      console.log(data);
    })
  }

  updateSMS(){
    this.spinner.show();
    this.api.performPutRequest(`sms/${this.sms.id}`, this.sms).then(()=>{
        this.getSMS();
        this.spinner.hide();
    }).catch(error=>console.log(error))
  }

  onSelectSms(id:string){
    this.sms = this.smsList.find(sms => sms.id === id);
  }
}
