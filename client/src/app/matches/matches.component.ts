import { Component } from '@angular/core';
import { SCHEDULE_DATA } from '../data/schedules';
import { FormsModule } from '@angular/forms';
import { Player } from '../_models/player';
import { PLAYERS_DATA } from '../data/players';
import { TEAMS_DATA } from '../data/teams';
import { Prediction } from '../_models/prediction';

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
  selectedResult: any = null;
  selectedScorer: any = null;
  outcome = 0;
  selectedResultIndex: number | null = null; 
  prediction: Prediction = {
    id: 0,
    userId: 1, 
    outcomes: Array(6).fill(''), 
    result: '',
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

  submitPrediction(match: any): void {
    console.log(`Predictions for match ${match.home} vs ${match.away}:`, match.prediction);
  }

  clearInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }

  submitPredictions(): void {
    if (this.validatePredictions()) {
      console.log('Predictions submitted:', this.prediction);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  selectResult(match: any): void {
    if (this.selectedResult) {
      this.selectedResult.result = '';
    }
    this.selectedResult = match;
  }

  selectScorer(match: any): void {
    if (this.selectedScorer) {
      this.selectedScorer.prediction.scorer = '';
    }
    this.selectedScorer = match;
  }

  validatePredictions(): boolean {
    const hasSixOutcomes = this.prediction.outcomes.length === 6 && this.prediction.outcomes.every(outcome => ['1', 'X', '2'].includes(outcome));
    const hasOneResult = this.prediction.result.trim() !== '' && /^\d+\s*:\s*\d+$/.test(this.prediction.result.trim());
    const hasOneScorer = this.prediction.scorer.trim() !== '';
    // console.log(hasSixOutcomes);
    console.log(hasOneScorer);
    return hasSixOutcomes && hasOneResult && hasOneScorer;
  }

  trackByIndex(index: number): number {
    return index;
  }

  updateResult(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && this.selectedResultIndex !== index) {
      inputElement.value = '';
    }
  }

  selectResultNew(index: number): void {
    this.selectedResultIndex = index;
  }

  clearResult(): void {
    this.selectedResultIndex = null;
  }
}
