import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoComponent } from './wo.component';
import { WoRoutingModule } from './wo-routing.module';
import { IheaderModule } from '../../component/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    WoRoutingModule,
    IheaderModule
  ],
  declarations: [WoComponent]
})
export class WoModule { }
