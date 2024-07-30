import { Component } from '@angular/core';
import { SCHEDULE_DATA } from '../data/schedules';
import { FormsModule } from '@angular/forms';
import { Player } from '../_models/player';
import { PLAYERS_DATA } from '../data/players';
import { TEAMS_DATA } from '../data/teams';
import { Prediction } from '../_models/prediction';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  schedule = SCHEDULE_DATA;
  players = PLAYERS_DATA;
  teams = TEAMS_DATA;
  selectedScorer: any = null;
  prediction: Prediction = {
    id: 0,
    userId: 1, 
    outcomes: Array(6).fill(''), 
    results: Array(6).fill(''),
    scorer: ''
  };


  getPlayersByClubs(home: string, away: string): Player[] {
    const homeClubId = this.getClubIdByName(home);
    const awayClubId = this.getClubIdByName(away);
    return this.players.filter(player => player.clubId === homeClubId || player.clubId === awayClubId);
  }

  getClubIdByName(name: string) {
    const club = this.teams.find(team => team.name === name);
    return club? club.id : null;	
  }

  submitPrediction(): void {
    Swal.fire({
      title: "Good job!",
      text: "You submitted your predictions!",
      icon: "success",
      timer: 3000
    });
    console.log('Predictions submitted:', this.prediction);
  }

  selectScorer(match: any): void {
    if (this.selectedScorer) {
      this.selectedScorer.prediction.scorer = '';
    }
    this.selectedScorer = match;
  }

  validatePredictions(): boolean {
    const hasSixOutcomes = this.prediction.outcomes.length === 6 && this.prediction.outcomes.every(outcome => ['1', 'X', '2'].includes(outcome));
    
    const allResultsValid = this.prediction.results.every(result => 
      result.trim() === '' || /^\d+\s*:\s*\d+$/.test(result.trim())
    );
    
    const nonEmptyResultsCount = this.prediction.results.filter(result => result.trim() !== '').length;
    const hasOneResult = nonEmptyResultsCount === 1;
    const hasOneScorer = this.prediction.scorer.trim() !== '';
    return hasSixOutcomes && allResultsValid && hasOneResult && hasOneScorer;
  }
}
