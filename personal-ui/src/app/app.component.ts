import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeftPaneComponent } from './layout/left-pane/left-pane.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { RightPaneComponent } from './layout/right-pane/right-pane.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';


@Component({
  standalone: true,
  imports: [
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CommonModule,
    RouterOutlet,
    RightPaneComponent,
    LeftPaneComponent,
    TopNavComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title() {
    return "I am Karam";
  }
}
