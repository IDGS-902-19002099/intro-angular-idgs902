import {Component} from "@angular/core";



@Component({
  selector:'app-idgs902',
  template:`<h3>IDGS902</h3>
    <div>
    <b>Matricula: </b>{{alumno.matricula}}
    </div>

    <div>
    <b>Nombre: </b>{{alumno.nombre | uppercase}}
    </div>

    <div>
      <b>Apellido paterno: </b>{{alumno.apaterno | lowercase}}
    </div>

    <div>
      <b>Inscrito: </b>{{alumno.Inscrito | currency}}
    </div>

    <div>
      <b>Fecha: </b>{{alumno.fechaNacimiento | date:"dd-MM-yy"}}
    </div>`
})
export class NamesGrupos902{

  alumno={
    matricula:19002099,
    nombre:'Dulce',
    apaterno:'Padron',
    Inscrito:111.93,
    fechaNacimiento:new Date()
    };
  constructor(){}
}




