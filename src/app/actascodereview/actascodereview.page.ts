import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-actascodereview',
  templateUrl: './actascodereview.page.html',
  styleUrls: ['./actascodereview.page.scss'],
})
export class ActascodereviewPage implements OnInit {

  public viewPdf;
  public viewPdfs;
  public filePath;
  public viewfilePath;

  constructor(
      public navCtrl: NavController,
      private document: DocumentViewer,
      private file: File,
      private transfer: FileTransfer
  ) {
    this.viewPdf = 'assets/';
    this.viewPdfs = 'www/assets/';
    this.viewfilePath = this.viewPdf + 'Code Review 001.pdf';
  }

  ngOnInit() {
  }

  openLocalPdf() {
    const options: DocumentViewerOptions = {title: 'My app'};
    this.document.viewDocument(`${this.viewPdfs}Code Review 001.pdf`, 'application/pdf', options);
  }

}
