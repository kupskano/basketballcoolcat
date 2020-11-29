import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalfmodalPageRoutingModule } from './halfmodal-routing.module';

import { HalfmodalPage } from './halfmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalfmodalPageRoutingModule
  ],
  declarations: [HalfmodalPage]
})
export class HalfmodalPageModule {}
