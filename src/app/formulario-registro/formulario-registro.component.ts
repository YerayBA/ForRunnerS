import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../registro.service';


@Component({
  selector: 'app-formulario-registro',
  imports: [FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: '../login/login.component.css'
})
export class FormularioRegistroComponent {

  nombreusuario: string = '';
  email: string = '';
  contrasena: string = '';
  apellido="";
  nombre="";
  errorMessage: string = '';
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
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = error.error || 'Ocurrió un error durante el registro';
        this.successMessage = '';
      }
    );
  }
 
}
