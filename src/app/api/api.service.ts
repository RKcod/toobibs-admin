import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static API_BASED_URL = 'https://apitest.toobibs.org/v1/';
  WEB_BASED_URL = 'https://api.toobibs.com/public/';
  private apiUrl = 'https://mspr-api.toobibs.org/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
  }


  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  performPostRequest(path, body) {
    return new Promise((resolve, reject) => {
      this.http.post(ApiService.API_BASED_URL + path, body,
        {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          })
        })
        .subscribe(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }

  performPutRequest(path, body) {
    return new Promise((resolve, reject) => {
      this.http.patch(ApiService.API_BASED_URL + path, body,
        {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          })
        })
        .subscribe(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }


  performGetRequest(path) {
    return new Promise((resolve, reject) => {
      this.http.get(ApiService.API_BASED_URL + path,
        {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          })
        })
        .subscribe(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }




  /**
   * Call GET endpoint
   * Path params should be sent directly on the path
   * @param path
   * @param queryParams
   * @param addToken
   */
  performGETCall(path, queryParams, addToken = false, token = null): Observable<any> {
    let t = "Bearer " + (token == null ? localStorage.getItem('token') : token);
    let headerDict: any = {
      'Content-type': 'application/json'
    };
    if (addToken) {
      headerDict["Authorization"] = t;
    }
    let params = '';
    if (queryParams != null) {
      params = '?' + this.serialize(queryParams);
    }
    return this.http.get(ApiService.API_BASED_URL + path + params, { headers: new HttpHeaders(headerDict) })
  }

  /**
   * Call POST endpoint
   * Path params should be sent directly on the path
   * @param path
   * @param bodyParams
   * @param addMultipart
   * @param addToken
   */
  performPOSTCall(path, bodyParams, addMultipart = false, addToken = false): Observable<any> {
    let headerDict: any = {

    };
    if (addToken) {
      headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
    }
    if (!addMultipart) {
      headerDict["Content-type"] = 'application/json';
    }
    let params = '';
    return this.http.post(ApiService.API_BASED_URL + path, bodyParams, { headers: new HttpHeaders(headerDict) })
  }

  /**
   * Call PUT endpoint
   * Path params should be sent directly on the path
   * @param path
   * @param bodyParams
   * @param addMultipart
   * @param addToken
   */
  performPUTCall(path, bodyParams, addMultipart = false, addToken = false): Observable<any> {
    let headerDict: any = {

    };
    if (addToken) {
      headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
    }
    if (!addMultipart) {
      headerDict["Content-type"] = 'application/json';
    }
    let params = '';
    return this.http.put(ApiService.API_BASED_URL + path, bodyParams, { headers: new HttpHeaders(headerDict) })
  }

  /**
   * Call PATCH endpoint
   * Path params should be sent directly on the path
   * @param path
   * @param bodyParams
   * @param addMultipart
   * @param addToken
   */
  performPATCHCall(path, bodyParams, addMultipart = false, addToken = false): Observable<any> {
    let headerDict: any = {

    };
    if (addToken) {
      headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
    }
    if (!addMultipart) {
      headerDict["Content-type"] = 'application/json';
    }
    let params = '';
    return this.http.patch(ApiService.API_BASED_URL + path, bodyParams, { headers: new HttpHeaders(headerDict) })
  }

  /**
   * Call DELETE endpoint
   * Path params should be sent directly on the path
   * @param path
   * @param addToken
   */
  performDELETECall(path, addToken = false): Observable<any> {
    let headerDict: any = {
      'Content-type': 'application/json'
    };
    if (addToken) {
      headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
    }
    let params = '';
    return this.http.delete(ApiService.API_BASED_URL + path, { headers: new HttpHeaders(headerDict) })
  }


  serialize(obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }

  handleErrors(res) {
    this.toastr.error(res, "Une erreur est survenue");
    if (res == "An Exception occurred when trying to authenticate the User.") {
      localStorage.removeItem("token");
      localStorage.removeItem("token_data");
      localStorage.removeItem("user");
      this.router.navigate(["/login"]);
    }
  }

  displayMessage(title, res) {
    this.toastr.success(res, title);
  }

  generatePassword() {
    return Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  }

  isValidEmail(email) {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  performRemoteGETCall(path): Observable<any> {

    return this.http.get(path)
  }

  formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
