import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/paginaprincipal']);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') === 'admin';
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
