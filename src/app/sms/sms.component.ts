import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})

export class SmsComponent implements OnInit {
  smsList : Sms[];
  smsMessage: string;
  sms: Sms ={
    message:'',
  };
  constructor(
      private apiService :ApiService,
      private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getSMS().then(()=>{
      this.spinner.hide();
    }).catch(error=>console.log(error))
  }

  getSMS(){
    return this.apiService.performGetRequest('sms')
      .then(({data}:{data:Sms[]})=>{
      this.smsList = data;
    })
  }

  updateSMS(){
    this.spinner.show();
    this.apiService.performPutRequest(`sms/${this.sms.id}`, this.sms).then(()=>{
        this.getSMS();
        this.spinner.hide();
    }).catch(error=>console.log(error))
  }

  onSelectSms(id:string){
    this.sms = this.smsList.find(sms => sms.id === id);
  }

}
