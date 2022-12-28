import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment';
import { Funcionario } from '../Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}funcionarios`

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  getFuncionario(id: string): Observable<Funcionario> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Funcionario>(url);
  }

  deleteFuncionario(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateFuncionario(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }

  createFuncionario(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
