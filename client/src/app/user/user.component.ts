import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../_services/user.service';

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
        console.log(this.user);
      },
      error: error => console.error('Error retrieving user:', error)
    })
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.rankUsers(this.users);
        console.log('Fetched users:', this.users);
      },
      error: error => console.error('Error retrieving users:', error)
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

  test() {
    // console.log('Test');
    this.router.navigate(['/matches']);
    // this.userService.getUsers().subscribe(users => console.log(users));
  }
}
