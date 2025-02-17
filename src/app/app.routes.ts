import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { LoginComponent } from './login/login.component';
import { FormularioRecuperarComponent } from './formulario-recuperar/formulario-recuperar.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RelojesComponenteComponent } from './relojes-componente/relojes-componente.component';
import { ZapatillasComponenteComponent } from './zapatillas-componente/zapatillas-componente.component';
import { CarrerasComponenteComponent } from './carreras-componente/carreras-componente.component';
import { AuthGuard } from './autenticator-guard.guard';

export const routes: Routes = [
    { path: '', component:LoginComponent }, // Página de inicio
    { path: 'formulario-registro', component: FormularioRegistroComponent },
    { path: 'formulario-recuperar', component: FormularioRecuperarComponent},
    { path: 'paginaprincipal', component: PaginaprincipalComponent, canActivate: [AuthGuard] },
    { path : 'relojes-componente', component: RelojesComponenteComponent, canActivate: [AuthGuard] },
    { path: 'zapatillas-componente', component: ZapatillasComponenteComponent, canActivate: [AuthGuard] },
    { path: 'carreras-componente', component: CarrerasComponenteComponent, canActivate: [AuthGuard] }

];
