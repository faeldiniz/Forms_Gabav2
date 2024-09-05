import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3100/api'; // URL do seu back-end

  constructor(private http: HttpClient) { }

  // Método para chamar a API
  getHello(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }
}
