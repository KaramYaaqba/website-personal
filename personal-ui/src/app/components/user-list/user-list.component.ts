import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let blog of blogs">
      <p>{{ blog.title }} ({{ blog.content }})</p>
    </div>
  `,
})
export class UserListComponent {
  blogs: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }
}
