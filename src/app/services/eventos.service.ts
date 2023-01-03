import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment'; 
import { Evento } from '../Evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}eventos`

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEvento(id: string): Observable<Evento> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Evento>(url);
  }

  deleteEvento(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateEvento(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }

  createEvento(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
