import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatSelectModule
  ],
  exports:[
    OperasBasComponent
  ]
})
export class OperasModule { }
