import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-halfmodal',
  templateUrl: './halfmodal.page.html',
  styleUrls: ['./halfmodal.page.scss'],
})
export class HalfmodalPage implements OnInit {

  constructor(
    private modalContrller: ModalController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  closeModal() {
    this.modalContrller.dismiss();
  }

  playerPosition() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/playerposition'])
        
      })
    })
  }


  coachRole() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/coach'])
        
      })
    })
  }


  pointSystem() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/pointsystem'])
        
      })
    })
  }

  ngOnInit() {
  }

}
