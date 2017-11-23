import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Endstand } from './endstand';

@Injectable()
export class EndstandService {

  constructor(private http: HttpClient) { }

  getEndstaende(): Observable<Endstand[]> {
    return this.http.get<Endstand[]>('http://localhost:8080/endstand');
  }

  postEndstand(endstand: Endstand): Observable<Endstand[]> {
    return this.http.post<Endstand[]>('http://localhost:8080/endstand', endstand);
  }
}
