import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },  {
    path: 'modal-menu',
    loadChildren: () => import('./modal-menu/modal-menu.module').then( m => m.ModalMenuPageModule)
  },
  {
    path: 'halfmodal',
    loadChildren: () => import('./halfmodal/halfmodal.module').then( m => m.HalfmodalPageModule)
  },
  {
    path: 'playerposition',
    loadChildren: () => import('./playerposition/playerposition.module').then( m => m.PlayerpositionPageModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('./coach/coach.module').then( m => m.CoachPageModule)
  },
  {
    path: 'pointsystem',
    loadChildren: () => import('./pointsystem/pointsystem.module').then( m => m.PointsystemPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
