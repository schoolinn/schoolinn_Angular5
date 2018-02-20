import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { IheaderModule } from '../../component/home/iheader/iheader.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    IheaderModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
