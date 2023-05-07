import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule,
    
  ]
})
export class ListModule { }
