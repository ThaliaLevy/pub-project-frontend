import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment'; 
import { Fornecedor } from '../Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}fornecedores`

  constructor(private http: HttpClient) { }

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl);
  }

  getFornecedor(id: string): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Fornecedor>(url);
  }

  deleteFornecedor(_id: string) {
    const url = `${this.apiUrl}/${_id}`
    return this.http.delete(url);
  }

  updateFornecedor(_id: string, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${_id}`
    return this.http.put<any>(url, formData);
  }

  createFornecedor(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
