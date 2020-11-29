import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalfmodalPage } from './halfmodal.page';

const routes: Routes = [
  {
    path: '',
    component: HalfmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalfmodalPageRoutingModule {}
