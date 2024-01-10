import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {FileUpload, FirebaseService} from '../api/firebase.service';
import *  as  firebase from 'firebase/app';

//import * as firebase from  'firebase/app'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    panelOpenState = false;
    data = {
        title: '',
        link: '',
        description: ''
    };
    dataCarreers = {
        title: '',
        date: '',
        description: '',
        mail: ''
    };

    dataContact = {
      location: "",
      phone: "",
      email: "",
    };

    dataFaq = {
      question: "",
      answer: "",
    };

    medias: any = [];
    carreers: any = [];
    faqs: any = [];
    id = null;

    cgu_file: FileList;
    cgv_file: FileList;
    currentFileUpload: FileUpload;


    constructor(private formBuilder: FormBuilder, private api: ApiService,
                private spinner: NgxSpinnerService, private firebaseService: FirebaseService) {
    }

    ngOnInit(): void {
        this.getMedia();
        this.getCarreers();
        this.getFaqs();
        this.getContact();
    }


    getMedia() {
        this.firebaseService.getAlldata('media').then(res => {
            this.medias = res;
            //console.log(this.medias);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });

    }


    getCarreers() {
        this.firebaseService.getAlldata('carreers').then(res => {
            this.carreers = res;
            //console.log(this.carreers);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });

    }


    getFaqs() {
        this.firebaseService.getAlldata('faqs').then(res => {
            this.faqs = res;
            //console.log(this.carreers);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });

    }

    edit(id){
      this.id = id;
      this.firebaseService.getDataById('media', this.id).then(res => {
        //this.medias = res;
        //console.log(res);
        this.data = {
          title: res.title,
          link: res.link,
          description: res.description
        };
      }, err => {
        //console.log(err);
        //this.spinner.hide();
        this.api.handleErrors('Une erreur sest produite');
      });
    }

    editCarreers(id){
      this.id = id;
      this.firebaseService.getDataById('carreers', this.id).then(res => {
        //this.medias = res;
        this.dataCarreers = {
          title: res.title,
          date: res.date,
          description: res.description,
          mail: res.mail
        };
      }, err => {
        //console.log(err);
        //this.spinner.hide();
        this.api.handleErrors('Une erreur sest produite');
      });
    }

    editFaq(id){
      this.id = id;
      this.firebaseService.getDataById('faqs', this.id).then(res => {
        //this.medias = res;
        this.dataFaq = {
          question: res.question,
          answer: res.answer
        };
      }, err => {
        //console.log(err);
        //this.spinner.hide();
        this.api.handleErrors('Une erreur sest produite');
      });
    }

    onSubmit() {
        if (this.data.title.length > 0 && this.data.link.length > 0 && this.data.description.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('media', this.data, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.data = {
                  title: '',
                  link: '',
                  description: ''
                };
                this.getMedia();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        } else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }

    onSubmitFaq() {
        if (this.dataFaq.question.length > 0 && this.dataFaq.answer.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('faqs', this.dataFaq, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataFaq = {
                  question: '',
                  answer: ''
                };
                this.getFaqs();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        } else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }

    onSubmitCarreers() {
        if (this.dataCarreers.title.length > 0 && this.dataCarreers.date.length > 0 &&  this.dataCarreers.mail.length > 0 && this.dataCarreers.description.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('carreers', this.dataCarreers, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataCarreers = {
                  title: '',
                  date: '',
                  description: '',
                  mail: ''
                };
                this.getCarreers();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        } else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }

    onSubmitContact() {
        if (this.dataContact.location.length > 0 && this.dataContact.phone.length > 0 && this.dataContact.email.length > 0) {
            this.spinner.show();
            if(this.cgu_file){
                this.uploadCgu();
            }
            if(this.cgv_file){
                this.uploadCgv();
            }
            this.firebaseService.createData('contact', this.dataContact, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataContact = {
                  location: '',
                  phone: '',
                  email: '',
                };
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        } else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }

  deleteD(dataId: any) {
    this.firebaseService.deleteData('media', dataId).then(res => {
      //this.medias = res;
      //console.log(res);
      this.getMedia();
    }, err => {
      //console.log(err);
      //this.spinner.hide();
      this.api.handleErrors('Une erreur sest produite');
    });
  }

  deleteCarreers(dataId: any) {
    this.firebaseService.deleteData('carreers', dataId).then(res => {
      //this.medias = res;
      //console.log(res);
      this.getCarreers();
    }, err => {
      //console.log(err);
      //this.spinner.hide();
      this.api.handleErrors('Une erreur sest produite');
    });
  }

  deleteFaq(dataId: any) {
    this.firebaseService.deleteData('faqs', dataId).then(res => {
      //this.medias = res;
      //console.log(res);
      this.getFaqs();
    }, err => {
      //console.log(err);
      //this.spinner.hide();
      this.api.handleErrors('Une erreur sest produite');
    });
  }

  getContact(){
    firebase.firestore().collection('contact').doc('contact').get().then(doc=>{
      this.dataContact  = {
        location : doc.data().location,
        email : doc.data().email,
        phone: doc.data().phone,
      };
      //console.log(this.dataContact)
    }).catch(err=>{/*console.log(err)*/})
  }



    selectCGUFile(event) {
        this.cgu_file = event.target.files;
    }

    selectCGVFile(event) {
        this.cgv_file = event.target.files;
    }

    uploadCgu() {
        const file = this.cgu_file.item(0);
        this.cgu_file = null;

        let currentFileUpload = new FileUpload(file);
        this.firebaseService.pushFileToStorage(currentFileUpload, (path)=>{
            console.log("cgu", path);
            this.firebaseService.createData('contact', {
                cgu_pdf: path
            }, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        });
    }

    uploadCgv() {
        const file = this.cgv_file.item(0);
        this.cgv_file = null;

        let currentFileUpload = new FileUpload(file);
        this.firebaseService.pushFileToStorage(currentFileUpload, (path)=>{
            console.log("cgv", path);
            this.firebaseService.createData('contact', {
                cgv_pdf: path
            }, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        });
    }
}
