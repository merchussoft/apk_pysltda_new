import {Component, Inject, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {AdminuserService} from '../provider/adminuser.service';
import {Observable} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public id: string;
    private angular: any;
    public listHours: any;
    public cod_usuario: Observable<any>;

    constructor(
        public storage: Storage,
        public navCtrl: NavController,
        public adminUser: AdminuserService
    ) {
        this.storage.get('nombre').then((nombre) => {
            if (nombre === null) {
                this.navCtrl.navigateRoot('/login');
            }
        });
        this.listHours = [];
    }

    ngOnInit() {
        this.relacionHoras();
    }

    relacionHoras() {
        this.storage.get('codigo').then((codigo) => {
            this.adminUser.reportsHoursUser(codigo)
                .subscribe((res) => {
                    this.listHours = res;
                }, error => {
                    console.log('revisando el error ==> ', error);
                });

        });

    }

}
