import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../_models/player';
import { Prediction } from '../_models/prediction';
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
import { formatDate, formatTime, sweetError, sweetSuccess, validatePrediction } from '../util/util';
import { PredictionsService } from '../_services/predictions.service';

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
  private predictionsService = inject(PredictionsService);
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
  scorerName: string = '';
  prediction: Prediction = {
    userId: 0,
    outcomes: Array(6).fill(''),
    results: Array(6).fill(''),
    points: 0,
    fixtureId: 0,
    playerId: 0,
  };

  ngOnInit() {
    this.loadCurrentUser();
    this.loadTeams();
    this.loadFixtures();
    this.loadPlayers();
    this.loadCurrentFixture();
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
      error: _ => sweetError('Error retrieving teams')
    });
  }

  loadFixtures() {
    this.fixturesService.getFixtures().subscribe({
      next: fixtures => {
        this.fixtures = fixtures;
      },
      error: _ => sweetError('Error retrieving fixtures')
    });
  }

  loadPlayers() {
    this.playersService.getPlayers().subscribe({
      next: players => {
        this.players = players;
      },
      error: _ => sweetError('Error retrieving players')
    });
  }

  loadCurrentFixture() {
    this.fixturesService.getUpcomingFixture().subscribe({
      next: fixture => {
        this.fixture = fixture;
        this.currentFixture = fixture;
        this.matches = this.getMatchesByFixture(this.fixture.id);
        this.loadPrediction();
      },
      error: _ => sweetError('Error retrieving fixture')
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
      error: _ => sweetError('Error retrieving matches')
    });
  }

  loadPrediction() {
    this.prediction.userId = this.currentUser()?.id!;
    this.prediction.fixtureId = this.currentFixture?.id!;
    if (this.currentUser()?.id && this.currentFixture?.id) {
      this.predictionsService.getPrediction(this.currentUser()!.id, this.currentFixture.id).subscribe({
        next: prediction => {
          this.prediction = prediction;
          this.updateFormFields();
        },
        error: _ => sweetError('Error retrieving prediction')
      });
    }
  }

  updateFormFields() {
    this.matches.forEach((match, index) => {
      const outcome = this.prediction.outcomes[index];
      const result = this.prediction.results[index];
      const scorerId = this.prediction.playerId;

      if (outcome) {
        this.prediction.outcomes[index] = outcome;
      }

      if (result) {
        this.prediction.results[index] = result;
      }

      if (scorerId) {
        const scorer = this.players.find(player => player.id === scorerId);
        if (scorer) {
          this.scorerName = scorer.name;
        }
      }
    });
  }

  getTeamNameById(teamId: number): string {
    const team = this.teams.find(t => t.id === teamId);
    return team ? team.name : 'Unknown Team';
  }

  getPlayersByClubs(home: number, away: number): Player[] {
    return this.players.filter(player => player.teamId === home || player.teamId === away);
  }

  selectScorer(event: any, match: Match): void {
    const value = event.target.value;
    const [id, name] = value.split('|');
    const playerId = parseInt(id, 10);
    this.prediction.playerId = playerId;
  }
  validatePredictions(): boolean {
    return validatePrediction(this.prediction!, this.currentFixture?.id!, this.fixture?.id!)
  }

  getMatchesByFixture(fixtureId: number | undefined): Match[] {
    return this.allMatches.filter(match => match.fixtureId === fixtureId);
  }

  onFixtureSelected(fixtureId: number): void {
    this.fixturesService.getFixture(fixtureId).subscribe({
      next: fixture => {
        this.fixture = fixture;
        this.matches = this.getMatchesByFixture(fixtureId)
      },
      error: _ => sweetError('Error retrieving fixture')
    });
  }

  submitPrediction(): void {
    if (this.validatePredictions()) {
      const prediction: Prediction = {
        userId: this.currentUser()?.id!,
        fixtureId: this.currentFixture?.id!,
        outcomes: this.prediction!.outcomes,
        results: this.prediction!.results,
        playerId: this.prediction.playerId,
        points: 0,
      };
      this.predictionsService.submitPrediction(prediction).subscribe({
        next: _ => {
          sweetSuccess("Your predictions have been submitted.");
        },
        error: _ => {
          sweetError("There was an error submitting your predictions.");
        }
      });
    } else {
      sweetError("Please complete all required fields before submitting.", "Invalid Predictions!");
    }
  }
}
