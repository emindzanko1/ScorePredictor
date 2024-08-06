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
import { WatchComponent } from "../watch/watch.component";
import { FixtureDropdownComponent } from "../dropdown/dropdown.component";
import { formatDate, formatTime, validatePrediction } from '../util/util';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [FormsModule, WatchComponent, FixtureDropdownComponent],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  private matchesService = inject(MatchesService);
  private teamsService = inject(TeamsService);
  private fixturesService = inject(FixturesService);
  private playersService = inject(PlayersService);
  currentUser = signal<User | null>(null);
  allMatches: Match[] = [];
  matchesByFixture: Match[] = [];
  matches: Match[] = [];
  teams: Team[] = [];
  fixtures: Fixture[] = [];
  players: Player[] = [];
  fixture?: Fixture;
  currentFixture?: Fixture;
  selectedScorer: any = null;
  prediction: Prediction = {
    id: 0, // fixture id
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
    this.loadCurrentFixture();
  }

  loadPlayers() {
    this.playersService.getPlayers().subscribe({
      next: players => {
        this.players = players;
      },
      error: error => console.error('Error retrieving players:', error)
    });
  }

  loadFixtures() {
    this.fixturesService.getFixtures().subscribe({
      next: fixtures => {
        this.fixtures = fixtures;
      },
      error: error => console.error('Error retrieving fixtures:', error)
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
        this.loadSchedules();
      },
      error: error => console.error('Error retrieving teams:', error)
    });
  }

  loadSchedules() {
    this.matchesService.getMatches().subscribe({
      next: matches => {
        this.allMatches = matches.map(match => ({
          ...match,
          homeTeamName: this.getTeamNameById(match.homeTeamId),
          awayTeamName: this.getTeamNameById(match.awayTeamId),
          date: formatDate(match.matchDateTime),
          time: formatTime(match.matchDateTime)
        }));
      },
      error: error => console.error('Error retrieving matches:', error)
    });
  }

  loadCurrentFixture() {
    this.fixturesService.getUpcomingFixture().subscribe({
      next: fixture => {
        this.fixture = fixture;
        this.currentFixture = fixture;
        this.matches = this.getMatchesByFixture(this.fixture.id);
      },
      error: error => console.error('Error retrieving fixture:', error)
    });
  }

  getTeamNameById(teamId: number): string {
    const team = this.teams.find(t => t.id === teamId);
    return team ? team.name : 'Unknown Team';
  }

  getPlayersByClubs(home: number, away: number): Player[] {
    return this.players.filter(player => player.teamId === home || player.teamId === away);
  }

  submitPrediction(): void {
    Swal.fire({
      title: "Good job!",
      text: "You submitted your predictions!",
      icon: "success",
      timer: 3000
    });
  }

  selectScorer(match: any): void {
    if (this.selectedScorer) {
      this.selectedScorer.prediction.scorer = '';
    }
    this.selectedScorer = match;
  }

  validatePredictions(): boolean  {
    return validatePrediction(this.prediction, this.currentFixture?.id!, this.fixture?.id!)
  }

  getMatchesByFixture(fixtureId: number | undefined): Match[] {
    const newMatches = this.allMatches.filter(match => match.fixtureId === fixtureId)
    return newMatches;
  }

  onFixtureSelected(fixtureId: number): void {
    this.fixturesService.getFixture(fixtureId).subscribe({
      next: fixture => {
        this.fixture = fixture;
        this.matches = this.getMatchesByFixture(fixtureId) 
      },
      error: error => console.error('Error retrieving fixture:', error)
    });
  }
}
