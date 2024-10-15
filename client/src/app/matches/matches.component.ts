import { Component, inject, Input, signal } from '@angular/core';
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
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatchTableHeaderComponent } from "../match-table-header/match-table-header.component";

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [FormsModule, WatchComponent, FixtureDropdownComponent, MatchTableHeaderComponent],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  private matchesService = inject(MatchesService);
  private teamsService = inject(TeamsService);
  private fixturesService = inject(FixturesService);
  private playersService = inject(PlayersService);
  private predictionsService = inject(PredictionsService);
  private route = inject(ActivatedRoute);
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
  id = Number(this.route.snapshot.paramMap.get('userId'));
  prediction: Prediction = {
    userId: 0,
    outcomes: Array(6).fill(''),
    results: Array(6).fill(''),
    points: 0,
    fixtureId: 0,
    playerId: 0,
    scorers: [],
    isSubmitted: true
  };
  @Input() isAdmin: boolean = false;
  playerCounts: { [playerId: number]: number } = {};
  matchResults: { [matchId: number]: { homeScore: number, awayScore: number } } = {};


  ngOnInit() {
    this.loadCurrentUser();
    this.loadTeams();
    this.loadFixtures();
    this.loadCurrentFixture();
    this.loadPlayers();
  }

  loadCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.currentUser.set(parsedUser);
      this.prediction.isSubmitted = parsedUser.id !== this.id;
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
    this.fixturesService.getUpcomingFixture().pipe(
      tap(fixture => {
        this.fixture = fixture;
        this.currentFixture = fixture;
      }),
      switchMap(() => this.matchesService.getMatches())
    ).subscribe({
      next: matches => {
        this.matches = this.getMatchesByFixture(this.fixture?.id);
        this.loadPrediction();
      },
      error: _ => sweetError('Error retrieving matches')
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
    this.prediction.userId = this.id;
    this.prediction.fixtureId = this.currentFixture?.id!;
    if (this.currentUser()?.id && this.currentFixture?.id) {
      this.predictionsService.getPrediction(this.prediction.userId, this.currentFixture.id).subscribe({
        next: prediction => {
          this.prediction = prediction;
          this.prediction.isSubmitted = true;
          this.updateFormFields();
        },
        error: _ => console.log('Error retrieving predictions')
      });
    }
  }

  updateFormFields() {
    this.matches.forEach((match, index) => {
      const outcome = this.prediction.outcomes[index];
      const result = this.prediction.results[index];

      if (outcome) {
        this.prediction.outcomes[index] = outcome;
      }

      if (result) {
        this.prediction.results[index] = result;
      }

      if (this.prediction.playerId) {
        const scorer = this.players.find(player => player.id === this.prediction.playerId);
        if (scorer) {
          this.prediction.playerId = scorer.id;
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
    const playerId = parseInt(event.target.value, 10);
    this.prediction.playerId = playerId;

    const scorer = this.players.find(player => player.id === playerId);
    if (scorer) {
      this.scorerName = scorer.name;
    }
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
    if (this.validatePredictions() || this.isAdmin) {
      this.prediction.isSubmitted = true;
      if (this.isAdmin) {
        this.prediction.results = this.matches.map(match => {
          const result = this.matchResults[match.id];
          if (result) {
            return `${result.homeScore}:${result.awayScore}`;
          }
          return "0:0";
        });
      }
      const prediction: Prediction = {
        userId: this.currentUser()?.id!,
        fixtureId: this.currentFixture?.id!,
        outcomes: this.prediction!.outcomes,
        results: this.prediction!.results,
        playerId: this.prediction.playerId,
        scorers: this.prediction!.scorers,
        points: 0,
        isSubmitted: this.prediction.isSubmitted
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

  isResultsValid() {
    return true;
  }

  getPlayersByClub(teamId: number) {
    return this.players.filter(player => player.teamId === teamId);
  }

  incrementPlayerCount(playerId: number) {
    this.prediction.scorers.push(playerId);
    this.playerCounts[playerId] = this.playerCounts[playerId] ? this.playerCounts[playerId] + 1 : 1;
    this.updateScores();
  }

  updateScores() {
    const scorerCounts = this.prediction.scorers.reduce((acc, playerId) => {
      acc[playerId] = (acc[playerId] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    this.getMatchesByFixture(this.fixture?.id).forEach((match, index) => {

      let homeGoals = 0, awayGoals = 0;

      const homePlayers = this.getPlayersByClub(match.homeTeamId);
      const awayPlayers = this.getPlayersByClub(match.awayTeamId);

      homePlayers.forEach(player => {
        if (scorerCounts[player.id]) {
          homeGoals += scorerCounts[player.id];
        }
      });

      awayPlayers.forEach(player => {
        if (scorerCounts[player.id]) {
          awayGoals += scorerCounts[player.id];
        }
      });
      this.matchResults[match.id] = { homeScore: homeGoals, awayScore: awayGoals };
      if (homeGoals > awayGoals) {
        this.prediction.outcomes[index] = '1';
      } else if (awayGoals > homeGoals) {
        this.prediction.outcomes[index] = '2';
      } else {
        this.prediction.outcomes[index] = 'X';
      }
    });
  }

  updatePlayerCount(event: Event, playerId: number) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      if (!this.prediction.scorers) {
        this.prediction.scorers = [];
      }
      this.prediction.scorers.push(playerId);
      this.playerCounts[playerId] = 1
    } else {
      if (this.prediction.scorers) {
        this.prediction.scorers = this.prediction.scorers.filter(id => id !== playerId);
      }
      delete this.playerCounts[playerId]
    }
    this.updateScores();
  }
}
