import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment'; 
import { Bebida } from '../Bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}bebidas`

 
  constructor(private http: HttpClient) { }

  getBebidas(): Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.apiUrl);
  }

  getBebida(id: string): Observable<Bebida> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Bebida>(url);
  }

  deleteBebida(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateBebida(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }

  createBebida(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
