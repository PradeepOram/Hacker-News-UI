import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoriesListComponent } from './stories-list/stories-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'View newest stories here !';
}
