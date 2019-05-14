import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelacionhorasPage } from './relacionhoras.page';

const routes: Routes = [
  {
    path: '',
    component: RelacionhorasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelacionhorasPage]
})
export class RelacionhorasPageModule {}
