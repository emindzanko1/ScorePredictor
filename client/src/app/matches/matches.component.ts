import { Component, input } from '@angular/core';
import { Round } from '../_models/round';
import { SCHEDULE_DATA } from '../_models/data';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
  schedule = SCHEDULE_DATA;
}
