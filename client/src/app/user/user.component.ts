import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../_models/data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  user = USERS.find(user => user.Id == 1);
}
