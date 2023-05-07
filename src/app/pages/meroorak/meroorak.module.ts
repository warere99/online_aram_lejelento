import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeroorakRoutingModule } from './meroorak-routing.module';
import { MeroorakComponent } from './meroorak.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    MeroorakComponent
  ],
  imports: [
    CommonModule,
    MeroorakRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MeroorakModule { }
