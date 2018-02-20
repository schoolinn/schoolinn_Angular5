import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { IheaderModule } from '../../component/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    IheaderModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
