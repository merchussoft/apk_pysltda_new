import { Component, Inject } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public id: string;
  private angular: any;

  constructor(
      private menuCtrl: MenuController,
      public storage: Storage,
      @Inject(DOCUMENT) document
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

  closeMenusss() {
    // document.getElementById('sideNavigation').style.width = '250px';
    // document.getElementById('main').style.marginLeft = '250px';

    document.getElementById('sideNavigation').setAttribute('style', 'width:250px;');
    document.getElementById('main').setAttribute('style', 'marginLeft:250px;');
  }

   openMenu() {
    document.getElementById('sideNavigation').setAttribute('style', 'width:0;');
    document.getElementById('main').setAttribute('style', 'marginLeft:0;');
  }
}
