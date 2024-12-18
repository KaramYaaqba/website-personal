import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/about' } // Wildcard for unmatched routes
  ];
  
