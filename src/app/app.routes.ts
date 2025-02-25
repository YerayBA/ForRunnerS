import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './Componentes/formulario-registro/formulario-registro.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormularioRecuperarComponent } from './Componentes/formulario-recuperar/formulario-recuperar.component';
import { PaginaprincipalComponent } from './Componentes/paginaprincipal/paginaprincipal.component';
import { RelojesComponenteComponent } from './Componentes/relojes-componente/relojes-componente.component';
import { ZapatillasComponenteComponent } from './Componentes/zapatillas-componente/zapatillas-componente.component';
import { CarrerasComponente } from './Componentes/carreras-componente/carreras-componente.component';
import { AuthGuard } from './Servicios/autenticator-guard.guard';

export const routes: Routes = [
    { path: '', component:LoginComponent }, // Página de inicio
    { path: 'formulario-registro', component: FormularioRegistroComponent },
    { path: 'formulario-recuperar', component: FormularioRecuperarComponent},
    { path: 'paginaprincipal', component: PaginaprincipalComponent, canActivate: [AuthGuard] },
    { path : 'relojes-componente', component: RelojesComponenteComponent, canActivate: [AuthGuard] },
    { path: 'zapatillas-componente', component: ZapatillasComponenteComponent, canActivate: [AuthGuard] },
    { path: 'carreras-componente', component: CarrerasComponente, canActivate: [AuthGuard] }

];
