import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from '../_models/data';
import { User } from '../_models/user';
import { CommonModule } from '@angular/common';

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
  id = Number(this.route.snapshot.paramMap.get('id'));
  user: User | undefined;
  rankedUsers: User[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.user = USERS.find(user => user.Id === this.id);
    })
    this.rankUsers();
  }

  rankUsers(): void {
    this.rankedUsers = USERS.sort((a, b) => b.Points - a.Points);
  }

  goToUserProfile(userId: number): void {
    this.router.navigate(['/user', userId]);
  }

  isCurrentUser(userId: number): boolean {
    return userId === this.id;
  }
}
