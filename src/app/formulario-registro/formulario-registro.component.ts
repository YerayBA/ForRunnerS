import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  imports: [],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  constructor() { }

  ngOnInit(): void {
  }   

  contraseña ="";
  confirmarContraseña ="";


  ComprobarContrasena(){

    if(this.contraseña == this.confirmarContraseña){
      console.log("Las contraseñas coinciden");
      alert("Las contraseñas coinciden");
  }

    else{
      console.log("Las contraseñas no coinciden");
      alert("Las contraseñas no coinciden");
    }
}
}
