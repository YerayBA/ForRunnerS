import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasService {

  private apiUrl = 'https://localhost:7208/api/Zapatillas'; 

  constructor(private http: HttpClient) { }

  
  getZapatillas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
