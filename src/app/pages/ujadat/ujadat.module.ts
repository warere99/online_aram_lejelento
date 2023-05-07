import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UjadatRoutingModule } from './ujadat-routing.module';
import { UjadatComponent } from './ujadat.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UjadatComponent
  ],
  imports: [
    CommonModule,
    UjadatRoutingModule,
    MatButtonModule
    
  ]
})
export class UjadatModule { }
