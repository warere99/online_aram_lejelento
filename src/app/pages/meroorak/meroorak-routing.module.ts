import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeroorakComponent } from './meroorak.component';

const routes: Routes = [{path: '', component: MeroorakComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeroorakRoutingModule { }
