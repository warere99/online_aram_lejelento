import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiktalasComponent } from './diktalas.component';

const routes: Routes = [{path: '', component: DiktalasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiktalasRoutingModule { }
