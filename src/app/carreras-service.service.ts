import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

 private apiUrl = 'https://localhost:7208/obtenerCarrera'; 

 private apiUrlEliminar = 'https://localhost:7208/BorrarCarrera';

 private apiUrlModificar = 'https://localhost:7208/ModificarCarrera';
;

  constructor(private http: HttpClient) { }

 
  getCarreras(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  eliminarCarrera(): Observable<any>{
    return this.http.delete(this.apiUrlEliminar);
  }

  modificarCarrera(carrera: any, carreraModificada: any): Observable<any>{
    return this.http.put<any>(this.apiUrlModificar, carrera, carreraModificada);
  }
}
