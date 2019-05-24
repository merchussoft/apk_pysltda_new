import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';

@Component({
    selector: 'app-actascodereview',
    templateUrl: './actascodereview.page.html',
    styleUrls: ['./actascodereview.page.scss'],
})
export class ActascodereviewPage implements OnInit {

    public viewPdf;
    public filePath;
    public viewfilePath;

// tslint:disable-next-line:variable-name
    constructor(
        public navCtrl: NavController,
        private file: File,
        private transfer: FileTransfer,
        private fileOpener: FileOpener
    ) {
        this.viewPdf = 'http://merchussoft.online/newwspysltda/assets/';
        this.viewfilePath = `${this.viewPdf}Code_Review_001.pdf`;
    }

    const; fileInput = {
        titulo: '',
        contenido: '',
        archivo: ''
    };

    // @ts-ignore
    const; fileTransfer: FileTransferObject = this.transfer.create();

    ngOnInit() {
    }

    changeListener($event): void {
        let filesss: File;
        filesss = $event.target.files[0];
        console.log('mirando esto aqui ==> ',  filesss);
    }

    // tslint:disable-next-line:variable-name
    openLocalPdf(url: string, file_name: string) {
        // tslint:disable-next-line:variable-name
        const url_local = this.file.dataDirectory + 'www/assets/';
        this.fileTransfer.download(url, url_local + file_name + '.pdf').then((entry) => {
            this.fileOpener.open(entry.toURL(), 'application/pdf');
        });
    }

    sendFiles() {
        console.log('mirando que sale por aqui ==> ', this.fileInput);
    }
}
