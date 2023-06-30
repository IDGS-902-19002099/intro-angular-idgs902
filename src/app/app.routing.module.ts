import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IricComponent } from './utl/iric/iric.component';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';

const routes:Routes=[
  {path: '', redirectTo: "/home", pathMatch:'full'},
  {path: 'AlatAlum',component: AlumnosReactiveComponent},
  {path: 'IRIC', component: IricComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}