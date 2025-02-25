import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RelojesService {

 private apiUrl = 'https://localhost:7208/api/Relojes'; 

  constructor(private http: HttpClient) { }

 
  getRelojes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
