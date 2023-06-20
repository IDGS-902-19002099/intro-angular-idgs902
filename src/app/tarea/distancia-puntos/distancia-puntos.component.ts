import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css']
})
export class DistanciaPuntosComponent {
  num1!:number;//x1
  num2!:number;//y1
  num3!:number;//x2
  num4!:number;//y2
  resultado!:number;

  calcular(){
    this.resultado=
    Math.sqrt(
      (Math.pow((this.num3-this.num1),2))
      +
      (Math.pow((this.num4-this.num2),2))
      );
    }

}
