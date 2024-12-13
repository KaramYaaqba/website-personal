import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeftPaneComponent } from './layout/left-pane/left-pane.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { RightPaneComponent } from './layout/right-pane/right-pane.component';


@Component({
  standalone: true,
  imports: [
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
export class AppComponent {}
