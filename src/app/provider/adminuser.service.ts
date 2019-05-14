import { Injectable } from '@angular/core';
import { SERVER_URL} from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {GlobalService} from '../global_function/global_function';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  private url: string;
  constructor(
      private httpClient: HttpClient,
      private globalService: GlobalService
  ) {
    this.url = SERVER_URL;
  }

  reportslist(id): Observable<any> {
    return this.httpClient.get(`${this.url}/api/reportslist/` + id);
  }

}
