import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}fornecedores`

  constructor() { }
}
