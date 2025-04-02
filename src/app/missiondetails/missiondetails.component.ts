import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissionDetailsComponent {
  @Input() mission: any; // 👈 Receive mission data from parent
}
