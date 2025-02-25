import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../../Servicios/registro.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-registro',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: '../login/login.component.css'
})
export class FormularioRegistroComponent {

  nombreusuario: string = '';
  email: string = '';
  contrasena: string = '';
  apellido="";
  nombre="";
  resultMessage: string = '';
  successMessage: string = '';

  constructor(private Register: Register) {}

  register(): void {
    const user = {
      NombreUsuario: this.nombreusuario,
      CorreoElectronico: this.email,
      Contraseña: this.contrasena,
      Nombre: this.nombre,
      Apellido: this.apellido
    };

    this.Register.registerUser(user).subscribe(
      (response) => {
        this.successMessage = response;
        this.successMessage = 'Se ha registrado con éxito';
      },
      (error) => {
        this.resultMessage = error;
        this.resultMessage = 'Ocurrió un error durante el registro';
        
       
      }
    );
  }
 
}
