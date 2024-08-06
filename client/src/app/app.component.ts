import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { HttpClient } from '@angular/common/http';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);
  private accountService = inject(AccountService);
  title = 'ScorePredictor';
  users: any;

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => {
        this.users = response,
        console.log(response);
      },
      error: error => console.error('Error:', error),
      complete: () => console.log('Users fetched!')
    })
  }
}
