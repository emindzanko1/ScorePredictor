import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../_models/player';
import { Prediction } from '../_models/prediction';
import Swal from 'sweetalert2';
import { User } from '../_models/user';
import { MatchesService } from '../_services/matches.service';
import { Match } from '../_models/match';
import { Team } from '../_models/team';
import { TeamsService } from '../_services/teams.service';
import { FixturesService } from '../_services/fixtures.service';
import { Fixture } from '../_models/fixture';
import { PlayersService } from '../_services/players.service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  private matchesService = inject(MatchesService);
  private teamsService = inject(TeamsService);
  private fixturesService = inject(FixturesService);
  private playersService = inject(PlayersService);
  currentUser = signal<User | null>(null);
  matches: Match[] = [];
  teams: Team[] = [];
  fixutres: Fixture[] = [];
  players: Player[] = [];
  selectedScorer: any = null;
  prediction: Prediction = {
    id: 0,
    userId: 0,
    outcomes: Array(6).fill(''),
    results: Array(6).fill(''),
    scorer: '',
    points: 0,
  };

  ngOnInit() {
    this.loadCurrentUser();
    this.loadTeams(); 
    this.loadFixtures();
    this.loadPlayers();
  }

  loadPlayers() {
    this.playersService.getPlayers().subscribe({
      next: players => {
        this.players = players;
         console.log('Fetched players:', this.players);
      },
      error: error => console.error('Error retrieving players:', error)
    });
  }

  loadFixtures() {
    this.fixturesService.getFixtures().subscribe({
      next: fixutres => {
        this.fixutres = fixutres;
        // console.log('Fetched fixutres:', this.fixutres);
      },
      error: error => console.error('Error retrieving fixutres:', error)
    });
  }

  loadCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser.set(JSON.parse(user));
    }
  }

  loadTeams() {
    this.teamsService.getTeams().subscribe({
      next: teams => {
        this.teams = teams;
        // console.log('Fetched teams:', this.teams);
        this.loadSchedules();
      },
      error: error => console.error('Error retrieving teams:', error)
    });
  }

  loadSchedules() {
    this.matchesService.getMatches().subscribe({
      next: matches => {
        this.matches = matches.map(match => ({
          ...match,
          homeTeamName: this.getTeamNameById(match.homeTeamId),
          awayTeamName: this.getTeamNameById(match.awayTeamId),
          date: this.formatDate(match.matchDateTime),
          time: this.formatTime(match.matchDateTime)
        }));
        // console.log('Fetched matches:', this.matches);
      },
      error: error => console.error('Error retrieving matches:', error)
    });
  }

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    return `${this.padTo2Digits(date.getDate())}.${this.padTo2Digits(date.getMonth() + 1)}.${date.getFullYear().toString().slice(-2)}`;
  }

  formatTime(dateTime: string): string {
    const date = new Date(dateTime);
    return `${this.padTo2Digits(date.getHours())}:${this.padTo2Digits(date.getMinutes())}`;
  }

  padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  getTeamNameById(teamId: number): string {
    const team = this.teams.find(t => t.id === teamId);
    return team ? team.name : 'Unknown Team';
  }

  getPlayersByClubs(home: number, away: number): Player[] {
    console.log(home);
    console.log(away);
    console.log('tu')
    return this.players.filter(player => player.teamId === home || player.teamId === away);
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

  getMatchesByFixture(fixtureId: number): Match[] {
    return this.matches.filter(match => match.fixtureId === fixtureId);
  }
  
  trackByFixture(index: number, fixture: Fixture): number {
    return fixture.id;
  }
  
  trackByMatch(index: number, match: Match): number {
    return match.id;
  }
  
}
