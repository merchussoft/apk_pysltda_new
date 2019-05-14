import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-relacionhoras',
  templateUrl: './relacionhoras.page.html',
  styleUrls: ['./relacionhoras.page.scss'],
})
export class RelacionhorasPage implements OnInit {

  public id: string;
  constructor(
      public storage: Storage
  ) {

  }

  ngOnInit() {
  }



}
