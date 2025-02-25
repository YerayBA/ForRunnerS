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
      imports: [RouterTestingModule], 
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock }, 
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
    authService.isAuthenticated.and.returnValue(true); 

    const canActivate = authGuard.canActivate(
      { } as any, 
      { } as any 
    );

    expect(canActivate).toBe(true);
  });

  it('should return false and redirect if the user is not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false); 
    spyOn(router, 'navigate'); 

    const canActivate = authGuard.canActivate(
      { } as any, 
      { } as any
    );

    expect(canActivate).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']); 
  });
});
