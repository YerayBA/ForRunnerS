import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { AuthService } from '../autenticacion.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
       
        const token = response.token;
        this.authService.setToken(token);
        this.router.navigate(['/paginaprincipal']); 
      },
      (error) => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }

}
