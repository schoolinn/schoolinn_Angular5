import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', loadChildren: 'app/home/login/signin/signin.module#SigninModule' },
      { path: 'signup', loadChildren: 'app/home/login/signup/signup.module#SignupModule' },
      { path: 'signin', loadChildren: 'app/home/login/signin/signin.module#SigninModule' },
      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
