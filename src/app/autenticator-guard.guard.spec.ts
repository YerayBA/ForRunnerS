import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Módulo para pruebas del enrutador
import { AuthGuard } from './autenticator-guard.guard';
import { AuthService } from './autenticacion.service';
import { Router } from '@angular/router';
import { of } from 'rxjs'; // Usado para crear observables en mocks

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  // Mock de AuthService
  beforeEach(() => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['isAuthenticated']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Importa RouterTestingModule para pruebas de enrutador
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock }, // Usa el mock del servicio
        Router
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if the user is authenticated', () => {
    authService.isAuthenticated.and.returnValue(true); // Simula que el usuario está autenticado

    const canActivate = authGuard.canActivate(
      { } as any, // Puedes pasar cualquier objeto vacío, ya que no lo estamos usando aquí
      { } as any // Lo mismo para el estado
    );

    expect(canActivate).toBe(true);
  });

  it('should return false and redirect if the user is not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false); // Simula que el usuario no está autenticado
    spyOn(router, 'navigate'); // Espía la llamada a navigate del router

    const canActivate = authGuard.canActivate(
      { } as any, // Igual que antes
      { } as any
    );

    expect(canActivate).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']); // Verifica que se redirija al login
  });
});
