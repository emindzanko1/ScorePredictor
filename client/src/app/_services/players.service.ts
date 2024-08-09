import { inject, Injectable, signal } from '@angular/core';
import { Player } from '../_models/player';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  players = signal<Player[]>([]);

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl + 'players').pipe(
      switchMap(players => {
        this.players.set(players);
        return of(players);
      })
    );
  }

  getPlayerById(id: number) {
    const player = this.players().find(player => player.id === id);
    if (player !== undefined) return of(player);

    return this.http.get<Player>(this.baseUrl + 'player/' + id);
  }
}
