import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CommandLineComponent } from './features/command-line/command-line.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent }, // Default route under layout
      { path: 'command', component: CommandLineComponent }, // command route
    ],
  },
  { path: '**', redirectTo: '' }, // Wildcard route for 404 handling
];