import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WoComponent } from './wo.component';

const routes: Routes = [
  {
    path: '',
    component: WoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoRoutingModule { }
