import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component:LoginComponent }, // Página de inicio
    { path: 'formulario-registro', component: FormularioRegistroComponent },
];
