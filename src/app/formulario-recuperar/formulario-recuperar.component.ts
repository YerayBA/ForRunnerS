import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-recuperar',
  imports: [FormsModule],
  templateUrl: './formulario-recuperar.component.html',
  styleUrl: '../login/login.component.css'
})
export class FormularioRecuperarComponent {

  Email="";

  constructor() { }
  ngInit(): void {
  }

  
  RecuperarPassword(){
    alert("Se ha enviado un correo a "+this.Email);
  }

}
