import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { IheaderModule } from '../../component/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    IheaderModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
