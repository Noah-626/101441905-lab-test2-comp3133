// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { PostsComponent } from './app/posts/posts.component';
import { MissionDetailsComponent } from './app/missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'mission/:id', component: MissionDetailsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()) // 👈 This fixes the warning
  ]
});


