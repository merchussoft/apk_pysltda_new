import { Injectable } from '@angular/core';
import { SERVER_URL} from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private url: string;
  constructor(public httpClient: HttpClient) {
    this.url = SERVER_URL;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error ', error.error.message);
    } else {
      console.error(
          `Backend código devuelto ${error.status}, ` +
          `body was: ${error.error}`
      );
    }
    return throwError('Algo salio mal; Por favor, intentelo de nuevo mas tarde.');
  }

  loginUser(formlogin): Observable<any> {
    let headers_send = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let option = {
      headers: headers_send
    };
    return this.httpClient.post(`${this.url}/api/login`, formlogin, option)
        .pipe(delay(1000),
            catchError(this.handleError));
  }

}
