import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FelhasznalasihelyekComponent } from './felhasznalasihelyek.component';

const routes: Routes = [{path: '', component: FelhasznalasihelyekComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FelhasznalasihelyekRoutingModule { }
