import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common'
import { PostsComponent } from './posts/posts.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, PostsComponent, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab Test 2 - Nhu Nam Nguyen - 101441905';

}
