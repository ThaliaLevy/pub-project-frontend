import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}login`

  constructor(private http: HttpClient) { }

  doLogin(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  doLogout() {
    localStorage.clear();
  }
}
