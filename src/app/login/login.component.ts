import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { AutenticacionService } from '../autenticacion.service'


@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  


  ngOnInit(): void {
  }

  username = '';
  password = '';
  errorMessage = '';

  constructor(private AutenticacionService: AutenticacionService, private router: Router) {}

 IniciarSesion(){

  this.AutenticacionService.login(this.username, this.password);

}

}
