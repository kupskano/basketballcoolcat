import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMenuPageRoutingModule } from './modal-menu-routing.module';

import { ModalMenuPage } from './modal-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMenuPageRoutingModule
  ],
  declarations: [ModalMenuPage]
})
export class ModalMenuPageModule {}
