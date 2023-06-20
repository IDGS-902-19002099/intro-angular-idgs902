import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaPuntosComponent } from '../distancia-puntos/distancia-puntos.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class DistanciaModule { }


