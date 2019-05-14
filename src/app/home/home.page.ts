import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public id: string;

  constructor(
      private menuCtrl: MenuController,
      public storage: Storage
  ) {
    this.relacionHoras();
  }

  relacionHoras() {
var ids =  '';
this.storage.get('codigo').then((codigo) => {
      ids = codigo;
console.log('mirndo algo aqui ==> ', ids);
    });

  }
}
