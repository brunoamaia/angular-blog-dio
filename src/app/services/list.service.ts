import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ResponseIBGE } from './api-models.model'

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private baseURL = 'http://servicodados.ibge.gov.br/api/v3/noticias/'
  // https://apinoticias.tedk.com.br/api/?q=goias&date=02/05/2023

  constructor(private http: HttpClient) {}

  getAll(): Observable<ResponseIBGE> {
    return this.http.get<ResponseIBGE>(`${this.baseURL}?qtd=4&page=1`)
      .pipe(
        tap((resultado: any) => console.log(resultado.items)),
        catchError((error: any) => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}
