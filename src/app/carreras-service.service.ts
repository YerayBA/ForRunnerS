import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

 private apiUrl = 'https://localhost:7208/obtenerCarrera'; 

  constructor(private http: HttpClient) { }

  // Método para obtener las zapatillas
  getCarreras(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
