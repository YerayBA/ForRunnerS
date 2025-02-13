import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { LoginComponent } from './login/login.component';
import { FormularioRecuperarComponent } from './formulario-recuperar/formulario-recuperar.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

export const routes: Routes = [
    { path: '', component:LoginComponent }, // Página de inicio
    { path: 'formulario-registro', component: FormularioRegistroComponent },
    { path: 'formulario-recuperar', component: FormularioRecuperarComponent},
    { path: 'paginaprincipal', component: PaginaprincipalComponent}
];
