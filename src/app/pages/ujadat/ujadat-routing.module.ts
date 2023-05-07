import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UjadatComponent } from './ujadat.component';

const routes: Routes = [
  {path: '', component: UjadatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UjadatRoutingModule { }
