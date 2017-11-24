import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Ranking } from './ranking';

@Injectable()
export class RankingsService {

  constructor(private http: HttpClient) { }

  getRankings(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>('http://localhost:8080/rangliste');
  }
}
