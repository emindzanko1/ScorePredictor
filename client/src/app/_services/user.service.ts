import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  users = signal<User[]>([]);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users').pipe(
      switchMap(users => {
        this.users.set(users);
        return of(users);
      })
    );
  }

  getUser(id: number) {
    const user = this.users().find(user => user.id === id);
    if (user !== undefined) return of(user);

    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
}
