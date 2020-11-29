import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.page.html',
  styleUrls: ['./modal-menu.page.scss'],
})
export class ModalMenuPage implements OnInit {

  constructor(private modalController: ModalController) { 
    
  }

  closeModal() {
   this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
