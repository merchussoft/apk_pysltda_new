import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class GlobalService {

    constructor(
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toastController: ToastController
    ) {
    }

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

    showLoading(menssage = 'Please wait..', navigateRoot = false, rute) {
        this.loadingCtrl.create({
            message: menssage,
            spinner: 'lines',
            mode: 'ios'
        }).then((loading) => {
            loading.present();
            setTimeout(() => {
                loading.dismiss();
                if (navigateRoot) {
                    this.navCtrl.navigateForward('/' + rute);
                }
            }, 2000);
        });
    }

    async alertToast(mensage, colorToast, positions, durations) {
        const toast = await this.toastController.create({
            message: mensage,
            color: colorToast,
            position: positions,
            duration: durations,
            mode: 'ios',
        });
        toast.present();
    }

}
