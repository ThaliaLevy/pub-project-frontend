import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment';
import { Login } from '../Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}login`

  constructor(private http: HttpClient) { }

  createLogin(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
