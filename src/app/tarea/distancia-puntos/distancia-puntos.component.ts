import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css']
})
export class DistanciaPuntosComponent {
  num1!:number;
  num2!:number;
  num3!:number;
  num4!:number;
  resultado!:number;

  calcular(){
    this.resultado=
    Math.sqrt(
      (Math.pow((this.num2-this.num1),2))
      +
      (Math.pow((this.num4-this.num3),2))
      );
    }

  }
