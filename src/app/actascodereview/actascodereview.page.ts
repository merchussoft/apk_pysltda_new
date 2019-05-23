import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

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
file_transfer: FileTransferObject;
  constructor(
      public navCtrl: NavController,
      private document: DocumentViewer,
      private file: File,
      private transfer: FileTransfer,
      private fileOpener: FileOpener
  ) {
    this.viewPdf = 'http://merchussoft.online/newwspysltda/assets/';
    this.viewPdfs = 'www/assets/';
    this.viewfilePath = `${this.viewPdf}Code_Review_001.pdf`;
  }

  ngOnInit() {
  }

  openLocalPdf() {
    console.log(`${this.viewPdf}Code_Review_001.pdf`);
    const options: DocumentViewerOptions = {title: 'My app'};
    // this.document.viewDocument(this.viewPdf + 'Code_Review_001.pdf', 'application/pdf', options);
    this.fileOpener.open(`${this.viewPdfs}Code_Review_001.pdf`, 'application/pdf')
        .then(() =>  console.log('se abrio'))
        .catch( e => console.log('Error al abrir el archivo ', e));

    // this.file_transfer = this.transfer.create();
    // this.file_transfer
    //     .download(this.viewPdfs, 'Code_Review_001.pdf')
    //     .then( entry => {
    //       console.log(entry.toURL);
    //       this.fileOpener.open(entry.toURL, 'application/pdf')
    //           .then(() =>  console.log('se abrio'))
    //           .catch( e => console.log('Error al abrir el archivo ', e));
    //     });
  }

}
