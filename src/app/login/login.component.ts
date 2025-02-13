import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor() { }

  ngOnInit(): void {
  }

  usuario ="";
  password ="";
  

 IniciarSesion(){

  if(this.usuario == "admin" && this.password == "admin"){
   
    alert("Bienvenido : "+this.usuario);
    

  }else{
    alert("Usuario o contraseña incorrecta");
  }
}

}
