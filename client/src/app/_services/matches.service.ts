import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Match } from '../_models/match';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  matches = signal<Match[]>([]);

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl + 'matches').pipe(
      switchMap(matches => {
        this.matches.set(matches);
        return of(matches);
      })
    );
  }
}
