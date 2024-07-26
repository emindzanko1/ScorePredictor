import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg'
  };
}
