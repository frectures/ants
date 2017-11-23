import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Endstand } from './endstand';

@Injectable()
export class EndstandService {

  private _endstaende = new Subject<Endstand[]>();

  get endstaende(): Observable<Endstand[]> {
    return this._endstaende;
  }

  constructor(private http: HttpClient) { }

  getEndstaende() {
    this.http.get<Endstand[]>('http://localhost:8080/endstand').subscribe(data => {
      this._endstaende.next(data);
    });
  }

  postEndstand(endstand: Endstand) {
    this.http.post<Endstand[]>('http://localhost:8080/endstand', endstand).subscribe(data => {
      this._endstaende.next(data);
    });
  }
}
