import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiktalasRoutingModule } from './diktalas-routing.module';
import { DiktalasComponent } from './diktalas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiktalasComponent
  ],
  imports: [
    CommonModule,
    DiktalasRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DiktalasModule { }
