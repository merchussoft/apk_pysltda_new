import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LoginuserService} from '../provider/loginuser.service';
import {GlobalService} from '../global_function/global_function';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        public storage: Storage,
        public loginUserService: LoginuserService,
        public globalFunction: GlobalService
    ) {
    }

    ngOnInit() {
    }

    login = { usuario: '',  password: ''};

    loginUser() {
        this.globalFunction.showLoading('', false, '');
        this.loginUserService.loginUser(this.login)
            .subscribe(res => {
                if (res.validate) {
                    this.globalFunction.showLoading('Cargando Datos ...', true, 'home');
                    this.storage.set('codigo', res[0][0]["cod_datos_usuarios"]);
                    this.storage.set('nombre', res[0][0]['nombre']);
                    this.storage.set('apellido', res[0][0]['apellido']);
                    this.storage.set('perfil', res[0][0]['cod_perfil']);
                }
                if (!res.validate) {
                    this.globalFunction.alertToast(res.mensaje, 'danger', 'middle', 1500);
                }
            }, err => {
                console.error('Error en el servidor ', err);
            });
    }
}
