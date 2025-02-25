import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7208/api/Auth/login'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post(this.apiUrl, body).pipe(
      catchError((error) => {
        throw error; 
      })
    );
  }

 
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }


  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
