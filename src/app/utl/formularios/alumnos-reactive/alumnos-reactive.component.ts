import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-reactive',
  templateUrl: './alumnos-reactive.component.html',
  styleUrls: ['./alumnos-reactive.component.css']
})
export class AlumnosReactiveComponent {
  mat!: string;
  nom!: string;
  edad!: string;
  correo!: string;
  calif!: string;
  foto!: string;
  registros: any[] = [];
  alumnosForm!:FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.alumnosForm = this.initForm();
  }

  onSubmit(): void{
    //console.log('Form-> ', this.alumnosForm.value);
    this.obtenerValor();
  
  const registro = {
    matricula: this.mat,
    nombre: this.nom,
    edad: this.edad,
    correo: this.correo,
    calificacion: this.calif,
    foto: this.foto
  };

  this.registros.push(registro);
  }

  obtenerValor(): void {
    // const mat = this.alumnosForm.get('matricula')?.value;
    // const nom = this.alumnosForm.get('nombre')?.value;
    // const edad = this.alumnosForm.get('edad')?.value;
    // const correo = this.alumnosForm.get('correo')?.value;
    // const calif = this.alumnosForm.get('calif')?.value;
    // const foto = this.alumnosForm.get('foto')?.value;
    // console.log('Matricula: ', mat);
    // console.log('Nombre: ', nom);
    
    this.mat = this.alumnosForm.get('matricula')?.value;
    this.nom = this.alumnosForm.get('nombre')?.value;
    this.edad = this.alumnosForm.get('edad')?.value;
    this.correo = this.alumnosForm.get('correo')?.value;
    this.calif = this.alumnosForm.get('calif')?.value;
    this.foto = this.alumnosForm.get('foto')?.value;
  }

  initForm(): FormGroup{
    return this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(3)]],
      nombre: ['', [Validators.required]],
      edad: [''],
      correo: ['', [Validators.required]],
      foto: [''],
      calif: ['']
    })
  }

}
