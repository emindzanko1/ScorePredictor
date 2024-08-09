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
  // selectedScorer: Player | null = null;
  selectedScorer: any = null;
  scorerName: string = '';
  // prediction?: Prediction;
  prediction: Prediction = {
    userId: 0,
    outcomes: Array(6).fill(''),
    results: Array(6).fill(''),
    // scorer: '',
    // scorer: undefined,
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
    // this.loadExistingPrediction(); 
  }

  loadPrediction() {
    this.prediction.userId = this.currentUser()?.id!;
    this.prediction.fixtureId = this.currentFixture?.id!;
    if (this.currentUser()?.id && this.currentFixture?.id) {
      console.log('sam')
      this.predictionsService.getPrediction(this.currentUser()!.id, this.currentFixture.id).subscribe({
        next: prediction => {
          this.prediction = prediction;
          console.log(this.prediction)
          this.updateFormFields();
        },
        error: error => console.error('Error retrieving prediction:', error)
      });
    }
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
        this.loadPrediction();
      },
      error: error => console.error('Error retrieving fixture:', error)
    });
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

  // submitPrediction(): void {
  //   console.log(this.prediction);
  //   Swal.fire({
  //     title: "Good job!",
  //     text: "You submitted your predictions!",
  //     icon: "success",
  //     timer: 3000
  //   });
  // }

  // selectScorer(event: any, match: Match): void {
  //   // if (this.selectedScorer) {
  //   //   this.selectedScorer.prediction.scorer = '';
  //   // }
  //   // this.selectedScorer = scorer;
  //   const value = event.target.value;
  //   const [id, name] = value.split('|');

  //   const playerId = parseInt(id, 10);

  //   this.playersService.getPlayerById(playerId).subscribe({
  //     next: player => {
  //       this.prediction.scorer = player;
  //       console.log(this.prediction.scorer);
  //     },
  //     error: error => {
  //       console.error('Error retrieving player details:', error);
  //     }
  //   });
  // }

  selectScorer(event: any, match: Match): void {
    const value = event.target.value;
    console.log(value);
    const [id, name] = value.split('|');
    const playerId = parseInt(id, 10);
    this.prediction.playerId = playerId;

    // this.playersService.getPlayerById(playerId).subscribe({
    //   next: player => {
    //     this.prediction.scorer = player;
    //   },
    //   error: error => {
    //     console.error('Error retrieving player details:', error);
    //   }
    // });
  }
  validatePredictions(): boolean {
    return validatePrediction(this.prediction!, this.currentFixture?.id!, this.fixture?.id!)
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
      console.log(prediction);
      this.predictionsService.submitPrediction(prediction).subscribe({
        next: _ => {
          Swal.fire({
            title: "Success!",
            text: "Your predictions have been submitted.",
            icon: "success",
            timer: 3000
          });
        },
        error: error => {
          console.error('Error submitting prediction:', error);
          Swal.fire({
            title: "Error!",
            text: "There was an error submitting your predictions.",
            icon: "error",
            timer: 3000
          });
        }
      });
    } else {
      Swal.fire({
        title: "Invalid Predictions!",
        text: "Please complete all required fields before submitting.",
        icon: "warning",
        timer: 3000
      });
    }
  }
}
