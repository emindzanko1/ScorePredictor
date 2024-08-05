import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Fixture } from '../_models/fixture';
import { Match } from '../_models/match';

@Component({
  selector: 'app-watch',
  standalone: true,
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  
  @Input() fixture: Fixture | undefined;
  @Input() matches: Match[] = [];
  @Output() countdownExpired = new EventEmitter<void>();

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    const update = () => {
      if (this.fixture && this.matches.length > 0) {
        const firstMatch = this.matches[0];
        const fixtureStartTime = new Date(firstMatch.matchDateTime);
        const now = new Date();
        const timeDiff = fixtureStartTime.getTime() - now.getTime();
        
        if (timeDiff > 0) {
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
 
          this.hours = hours.toString().padStart(2, '0');
          this.minutes = minutes.toString().padStart(2, '0');
          this.seconds = seconds.toString().padStart(2, '0');
        } else {
          this.hours = '00';
          this.minutes = '00';
          this.seconds = '00';
          this.countdownExpired.emit();
        }
      }
    };

    update();
    setInterval(update, 1000);
  }
}
