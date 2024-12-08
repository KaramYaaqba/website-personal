import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  template: `
  <h1>Welcome to Angular</h1>
  <app-user-list></app-user-list>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-ui';
}
