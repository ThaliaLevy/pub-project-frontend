import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuarios`

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuario(id: string): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Usuario>(url);
  }

  deleteUsuario(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateUsuario(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }

  createUsuario(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
