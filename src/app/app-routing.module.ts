import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'history',
    loadChildren:() => import('./modules/history/history-routing.module').then(m => m.HistoryRoutingModule)
  },
  {
    path: 'tracks',
    loadChildren:() => import('./modules/tracks/tracks-routing.module').then(m => m.TracksRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
