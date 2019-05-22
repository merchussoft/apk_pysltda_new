import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActascodereviewPage } from './actascodereview.page';

const routes: Routes = [
  {
    path: '',
    component: ActascodereviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActascodereviewPage]
})
export class ActascodereviewPageModule {}
