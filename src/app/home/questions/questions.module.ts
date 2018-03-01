import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { IheaderModule } from '../../component/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    IheaderModule
  ],
  declarations: [QuestionsComponent]
})
export class QuestionsModule { }
