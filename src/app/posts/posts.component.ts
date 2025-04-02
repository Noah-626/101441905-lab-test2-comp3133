import { Component, OnInit } from '@angular/core';
import { MyhttpclientService } from '../network/spacexapi.service';
import { MissionDetailsComponent } from '../missiondetails/missiondetails.component';
import { NgIf, NgFor } from '@angular/common';
import { MissionFilterComponent } from '../missionfilter/missionfilter.component';
import { RouterModule } from '@angular/router'; // <-- Add this

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    MissionDetailsComponent,
    NgIf,
    NgFor,
    MissionFilterComponent,
    RouterModule  // <-- Add this to enable routerLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  selectedMission: any = null;

selectMission(mission: any) {
  this.selectedMission = mission;
}


  constructor(private myhttpclientService: MyhttpclientService) {}

  ngOnInit(): void {
    this.myhttpclientService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
        this.filteredPosts = data;
      },
      (error) => {
        console.log(`ERROR: ${error}`);
      }
    );
  }

  filterByYear(year: string) {
    if (year.trim() === '') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.launch_year === year);
    }
  }
}
