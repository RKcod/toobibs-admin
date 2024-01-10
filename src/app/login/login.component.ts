import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api/api.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    data:any = {
        username: '',
        password: ''
    };

    constructor(public api: ApiService, public router: Router, private spinner: NgxSpinnerService) {

        if(localStorage.getItem("token") != null && this.router.url == "/login"){
            this.router.navigate(["/dashboard"]);
        }
    }

    ngOnInit(): void {
    }

    login() {
        if (this.data.username.length > 0 && this.data.password.length > 0) {
            this.spinner.show();
            this.data.client_id = 2;
            this.data.client_secret = "iqn28N849cRfBh14xLpvRF089URio9jh4W7EhVqm";
            this.data.grant_type = "password";
            this.data.scope = "";
            this.api.performPOSTCall('oauth/token', this.data).subscribe(d => {
                this.spinner.hide();
                //console.log(d);
                //if(d.error)
                this.api.performGETCall('user/profile', null, true, d.access_token).subscribe(r => {
                    //console.log(r);
                  /*  this.api.displayMessage("Succès", "Authentification réussi, vous serrez rediriger ver le dashboard");
                  localStorage.setItem('token', d.access_token);
                  localStorage.setItem('user', JSON.stringify(r.data));
                  localStorage.setItem('token_data', JSON.stringify(d));
                  this.router.navigate(['/dashboard']);*/
                    if(r.data.user_type == "ADMIN"){
                        this.api.displayMessage("Succès", "Authentification réussi, vous serez redirigé vers le dashboard");
                        localStorage.setItem('token', d.access_token);
                        localStorage.setItem('user', JSON.stringify(r.data));
                        localStorage.setItem('token_data', JSON.stringify(d));
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                        this.spinner.hide();
                        this.api.handleErrors("Seuls les administrateurs sont autorisés à se connecter sur ce dashboard");
                    }

                }, err => {
                    this.spinner.hide();
                    //console.log(err.error);
                    this.api.handleErrors(err.error.message);

                });
            }, error => {
                this.spinner.hide();
                //console.log(error.error);
                this.api.handleErrors(error.error);
            });
        } else {

        }
    }
}
