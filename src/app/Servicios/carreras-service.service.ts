import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

 private apiUrl = 'https://localhost:7208/obtenerCarrera'; 

 private apiUrlEliminar = 'https://localhost:7208/BorrarCarrera';

 private apiUrlModificar = 'https://localhost:7208/ModificarCarrera';

  private apiUrlCrear = 'https://localhost:7208/registroCarrera'; 
;

  constructor(private http: HttpClient) { }

 
  getCarreras(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  eliminarCarrera(Carrera: any): Observable<any> {
    return this.http.delete<any>(this.apiUrlEliminar, Carrera);  
  }
  
  modificarCarrera(carreraModificada: any): Observable<any>{
    return this.http.put<any>(this.apiUrlModificar, carreraModificada);
  }
  
  crearCarrera(Carrera: any): Observable<any> {
    return this.http.post<any>(this.apiUrlCrear, Carrera);
  }

}
