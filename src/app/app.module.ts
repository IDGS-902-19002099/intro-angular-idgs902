import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { NamesGrupos902 } from './utl/grupo902.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaPuntosModule } from './tarea/distancia-puntos.module';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    NamesGrupos902,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaPuntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
