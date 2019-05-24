import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActascodereviewPage } from './actascodereview.page';
//import {PdfViewerModule} from 'ng2-pdf-viewer';

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
        RouterModule.forChild(routes),
        //PdfViewerModule
    ],
  declarations: [ActascodereviewPage]
})
export class ActascodereviewPageModule {}
