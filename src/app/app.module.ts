import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { NamesGrupos902 } from './utl/grupo902.component';
import { IdgsComponent } from './utl/idgs/idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    NamesGrupos902,
    IdgsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
