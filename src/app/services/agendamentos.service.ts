import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment'; 
import { Agendamento } from '../Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}agendamentos`

  constructor(private http: HttpClient) { }

  getAgendamento(id: string): Observable<Agendamento> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Agendamento>(url);
  }

  getAgendamentosUsuario(id: string): Observable<Agendamento[]> {
    const url = `${this.apiUrl}/usuario/${id}`
    return this.http.get<Agendamento[]>(url);
  }

  createAgendamento(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  deleteAgendamento(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateAgendamento(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }
}
