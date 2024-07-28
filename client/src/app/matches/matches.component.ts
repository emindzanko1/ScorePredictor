import { Component, input } from '@angular/core';
import { PLAYERS_DATA, SCHEDULE_DATA } from '../_models/data';
import { FormsModule } from '@angular/forms';
import { Player } from '../_models/player';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
  schedule = SCHEDULE_DATA;
  players = PLAYERS_DATA;
  selectedResult: any = null;
  selectedScorer: any = null;


  getPlayersByClubs(home: string, away: string): Player[] {
    return this.players;
    // const homeClubId = this.getClubIdByName(home);
    // const awayClubId = this.getClubIdByName(away);
    // return this.players.filter(player => player.clubId === homeClubId || player.clubId === awayClubId);
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
      console.log('Predictions submitted:', this.schedule);
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
    let allOutcomesSelected = true;
    let oneResultSelected = false;
    let oneScorerSelected = false;

    for (const round of this.schedule) {
      for (const match of round.matches) {
        if (!match.prediction.outcome) {
          allOutcomesSelected = false;
        }
        if (match.result) {
          oneResultSelected = true;
        }
        if (match.prediction.scorer) {
          oneScorerSelected = true;
        }
      }
    }

    return allOutcomesSelected && oneResultSelected && oneScorerSelected;
  }
}
