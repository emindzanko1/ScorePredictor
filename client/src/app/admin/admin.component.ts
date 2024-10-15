import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchesComponent } from "../matches/matches.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, MatchesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
}
