import {Component, OnInit} from '@angular/core';
import {AdminuserService} from '../provider/adminuser.service';
import {Storage} from '@ionic/storage';
import {LoadingController} from '@ionic/angular';
import {GlobalService} from '../global_function/global_function';
import {Observable} from "rxjs";

@Component({
    selector: 'app-relacionhoras',
    templateUrl: './relacionhoras.page.html',
    styleUrls: ['./relacionhoras.page.scss'],
})
export class RelacionhorasPage implements OnInit {

    public id: string;
    public cod_usuario: Observable<any>;
    public procesos: Observable<any>;
    public actividades: Observable<any>;
    public tipoactividades: Observable<any>;
    public modulos: Observable<any>;
    public reporte = {};

    constructor(
        public storage: Storage,
        public adminUser: AdminuserService,
        public loadingController: LoadingController,
        public globalFuncion: GlobalService
    ) {
        this.storage.get('codigo').then((codigo) => {
            this.cod_usuario = codigo;
        });
    }

    ngOnInit() {
        this.selectReporteHoras();
    }

    showLoading(menssage, dataWs = '', root = false) {
        this.loadingController.create({
            message: menssage,
            translucent: false,
            spinner: 'lines',
            mode: 'ios'
        }).then((loading) => {
            loading.present();
            setTimeout(() => {
                loading.dismiss();
                this.horasForm();
            }, 1000);
        });
    }

    enviarHoras() {
        this.showLoading('Enviando Datos ...');
    }

    horasForm() {
        this.reporte['usuario'] = this.cod_usuario;
        this.adminUser.registerHours(this.reporte)
            .subscribe(resp => {
                if (resp['validate']) {
                    this.globalFuncion.alertToast(resp['mensaje'], 'success', 'top', 1500);
                    this.reporte = {};
                }
                if (!resp['validate']) {
                    this.globalFuncion.alertToast(resp['mensaje'], 'danger', 'middle', 1500);
                }
            }, err => {
                console.log('Error en el servidor ==> ', err);
            });
    }

    selectReporteHoras() {
        this.adminUser.selectRegistroHoras()
            .subscribe(res => {
                this.procesos = res['proceso'];
                this.actividades = res['actividad'];
                this.tipoactividades = res['tipoactividad'];
                this.modulos = res['modulo'];
            }, err => {
                console.log('Error en el servidor ==> ', err);
            });
    }

}
