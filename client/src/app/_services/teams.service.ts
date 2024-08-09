import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Team } from '../_models/team';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  teams = signal<Team[]>([]);

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + 'teams').pipe(
      switchMap(teams => {
        this.teams.set(teams);
        return of(teams);
      })
    );
  }
}
