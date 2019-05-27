import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {GlobalService} from '../../global_function/global_function';
import {AdminuserService} from '../../provider/adminuser.service';
import {FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(
        private modalCtrl: ModalController,
        private globalService: GlobalService,
        protected  adminUser: AdminuserService
    ) {

    }


    //fileUpload: File;
    actasForm: FormGroup;
    public formFiles = '';
    public nameFile = '';

    changeListener($event): void {
        const fileUpload = $event.target.files;
        // tslint:disable-next-line:variable-name
        const type_divido = fileUpload[0].type.split('/')[1];
        if (fileUpload[0].length !== 0 && type_divido === 'pdf') {
            this.formFiles = fileUpload[0];
            this.nameFile = fileUpload[0].name;
        }
        if (type_divido !== 'pdf') {
            this.globalService.alertToast('Formato no permitido solo se acepta pdf', 'danger', 'middle', 1500);
        }
    }

    actas = {
        titulo: '',
        descripcion: '',
        files: ''
        // files: ''
    };

    ngOnInit() {
    }

    close_modal() {
        this.modalCtrl.dismiss();
    }

    save_actas(myForms) {
        this.actas['files'] = this.formFiles;
        this.adminUser.registerActas(this.actas)
            .subscribe((res) => {
                console.log('mirando que me retorna esto ==> ', res);
            });
    }
}
