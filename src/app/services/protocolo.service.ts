import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.dev';

@Injectable({
  providedIn: 'root'
})

export class ProtocoloService {
  constructor(private http: HttpClient) { }

  gerarProtocolo(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/v1/protocolo`, payload);
  }
}
