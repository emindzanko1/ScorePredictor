import { Component, input, output } from '@angular/core';
import { Fixture } from '../_models/fixture';

@Component({
  selector: 'app-fixture-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class FixtureDropdownComponent {
  fixtures = input.required<Fixture[]>();
  selectedFixture = output<number>();
  selectedFixtureId: number | null = null;

  onFixtureChange(event: Event): void {
    const target = event.target as HTMLSelectElement; 
    const fixtureId = Number(target.value);
    this.selectedFixtureId = fixtureId;
    this.selectedFixture.emit(fixtureId);
  }
}
