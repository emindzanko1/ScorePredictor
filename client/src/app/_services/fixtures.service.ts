import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Fixture } from '../_models/fixture';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  fixtures = signal<Fixture[]>([]);
  getFixtures(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.baseUrl + 'fixtures').pipe(
      switchMap(fixtures => {
        this.fixtures.set(fixtures);
        return of(fixtures);
      })
    );
  }

  getFixture(id: number) {
    const fixture = this.fixtures().find(fixture => fixture.id === id);
    if (fixture !== undefined) return of(fixture);

    return this.http.get<Fixture>(this.baseUrl + 'fixtures/' + id);
  }
}
