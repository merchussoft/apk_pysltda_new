import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskIonicModule} from 'ngx-mask-ionic';
import { ModalPageModule } from './modal/modal/modal.module';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
 // import { DocumentViewer } from '@ionic-native/document-viewer';
 // import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileOpener } from '@ionic-native/file-opener/ngx';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgxMaskIonicModule.forRoot(),
    ModalPageModule
    //PdfViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      File, FileTransfer, FileOpener//, DocumentViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
