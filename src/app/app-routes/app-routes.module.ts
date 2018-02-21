import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { CanActivateService } from './can-activate.service';

const appRoutes: Routes = [
  // { path: 'text', component: Test1Component }
  {
    path: 'login',
    loadChildren: 'app/home/login/login.module#LoginModule'
  },
  {
    path: 'index',
    loadChildren: 'app/home/index/index.module#IndexModule',
    //canActivate: [CanActivateService]
  },
  {
    path: '',
    loadChildren: 'app/home/index/index.module#IndexModule',
    //canActivate: [CanActivateService]
  },
  {
    path: 'about',
    loadChildren: 'app/home/about/about.module#AboutModule',
    //canActivate: [CanActivateService]
  },
  {
    path: 'wo',
    loadChildren: 'app/home/wo/wo.module#WoModule',
    //canActivate: [CanActivateService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }