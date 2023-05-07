import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FelhasznalasihelyekRoutingModule } from './felhasznalasihelyek-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FelhasznalasihelyekComponent } from './felhasznalasihelyek.component';

@NgModule({
  declarations: [
    FelhasznalasihelyekComponent
  ],
  imports: [
    CommonModule,
    FelhasznalasihelyekRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class FelhasznalasihelyekModule { }
