import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LoginuserService} from '../provider/loginuser.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        public navCtrl: NavController,
        public loadingController: LoadingController,
        public storage: Storage,
        public toastController: ToastController,
        public loginUserService: LoginuserService
    ) {
    }

    ngOnInit() {
    }

    login = {
        usuario: '',
        password: ''
    };

    async alertToast(mensage, colorToast, positions, durations) {
        const toast = await this.toastController.create({
            message: mensage,
            color: colorToast,
            position: positions,
            duration: durations
        });
        toast.present();
    }

    showLoading(mensage, root = false) {
        this.loadingController.create({
            message: mensage,
            spinner: 'lines',
            mode: 'ios'
        }).then((loading) => {
            loading.present();
            setTimeout(() => {
                loading.dismiss();
                if (root) {
                    this.navCtrl.navigateForward('/home');
                }
            }, 2000);
        });
    }

    loginUser() {
        this.showLoading('');
        this.loginUserService.loginUser(this.login)
            .subscribe(res => {
                if (res.validate) {
                    this.showLoading('Cargando Datos ...', true);
                    this.storage.set('codigo', res[0][0]["cod_datos_usuarios"]);
                    this.storage.set('nombre', res[0][0]['nombre']);
                    this.storage.set('apellido', res[0][0]['apellido']);
                    this.storage.set('perfil', res[0][0]['cod_perfil']);
                }
                if (!res.validate) {
                    this.alertToast(res.mensaje, 'danger', 'middle', 1500);
                }
            }, err => {
                console.error('Error en el servidor ', err);
            });
    }
}
