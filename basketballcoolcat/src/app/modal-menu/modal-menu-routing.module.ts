import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMenuPage } from './modal-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMenuPageRoutingModule {}
