import {Injectable} from '@angular/core';
import {SERVER_URL} from '../../environments/environment';
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

    /**
     * aqui se generan las horas de cada usuario
     * @param id
     */
    reportsHoursUser(id): Observable<any> {
        return this.httpClient.get(`${this.url}/api/reportslist/` + id)
            .pipe(delay(1500),
                catchError(this.globalService.handleError));
    }

    /**
     * se registrna las horas de trabajo del usuario
     * @param insertFormHours
     */
    registerHours(insertFormHours) {
        let headers_send = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        let option = {
            headers: headers_send
        };
        return this.httpClient.post(`${this.url}/api/inserthoras`, insertFormHours, option)
            .pipe(delay(50),
                catchError(this.globalService.handleError));
    }

    /**
     * se crea servicio para el llamado de los select
     */
    selectRegistroHoras() {
        return this.httpClient.get(`${this.url}/api/selecthoras`)
            .pipe(delay(1000));
    }

    registerActas(dataActas) {
        // tslint:disable-next-line:variable-name
        const headers_send = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        const option = {
            headers: headers_send
        };

        return this.httpClient.post(`${this.url}/api/insertactas`, dataActas, option)
            .pipe(delay(1000));
    }

}
