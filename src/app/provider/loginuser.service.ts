import { Injectable } from '@angular/core';
import { SERVER_URL} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {GlobalService} from '../global_function/global_function';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private url: string;
  constructor(
      public httpClient: HttpClient,
      public globalService: GlobalService
  ) {
    this.url = SERVER_URL;
  }

  loginUser(formlogin): Observable<any> {
    let headers_send = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let option = {
      headers: headers_send
    };
    return this.httpClient.post(`${this.url}/api/login`, formlogin, option)
        .pipe(delay(1000),
            catchError(this.globalService.handleError));
  }

  cerrarSession(): Observable<any> {
    return this.httpClient.get(`${this.url}/api/login`)
        .pipe(delay(1000),
            catchError(this.globalService.handleError));
  }

}
