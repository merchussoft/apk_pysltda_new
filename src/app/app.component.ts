import { Component, OnInit } from '@angular/core';

import {LoadingController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Reporte Horas',
      url: '/relacionhoras',
      icon: 'calendar'
    },
    {
      title: 'Actas Codereview',
      url: '/actascodereview',
      icon: 'book'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public navCtrl: NavController,
    public loadingController: LoadingController
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  ngOnInit() {
  }

  showLoading(menssage) {
    this.loadingController.create({
      message: menssage,
      spinner: 'lines',
      mode: 'ios'
    }).then((loading) => {
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.cerrarSesion();
      }, 2000);
    });
  }

  cerrarSession() {
    this.showLoading('Cerrando sesion ...');
  }

  cerrarSesion() {
    this.storage.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
