import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GlobalService {

    handleError(error: HttpErrorResponse) {
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

}
