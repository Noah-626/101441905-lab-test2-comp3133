import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionFilterComponent {
  @Output() yearFilterChanged = new EventEmitter<string>();
  selectedYear = '';

  onYearChange() {
    this.yearFilterChanged.emit(this.selectedYear);
  }
}
