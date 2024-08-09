import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../_services/user.service';
import { sweetError } from '../util/util';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  user?: User;
  users: User[] = [];;
  rankedUsers: User[] = [];

  ngOnInit(): void {
    this.loadUser();
    this.loadUsers();
  }

  loadUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.userService.getUser(id).subscribe({
      next: user => {
        this.user = user;
      },
      error: _ => sweetError('Error retrieving user')
    })
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.rankUsers(this.users);
      },
      error: _ => sweetError('Error retrieving user')
    });
  }

  rankUsers(users: User[]): void {
    this.rankedUsers = users.sort((a, b) => b.points - a.points);
  }

  goToUserProfile(userId: number): void {
    this.router.navigate(['/user', userId]);
  }

  isCurrentUser(userId: number): boolean {
    return userId === this.id;
  }

  play() {
    this.router.navigate(['/matches']);
  }
}
