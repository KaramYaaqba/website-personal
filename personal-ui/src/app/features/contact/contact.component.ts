import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://medium.com/feed/@kyaaqba', { responseType: 'text' })
      .subscribe({
        next: (data) => {
          console.log('Medium feed fetched successfully!', data);
          this.parseXmlToJson(data);
        },
        error: (error) => console.error('Error fetching Medium feed:', error)
      });
  }

  private parseXmlToJson(xmlString: string): any {
    // Use DOMParser to parse the feed string to an XML document
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
  
    // Now extract items (entries) from the RSS feed
    const items = xml.getElementsByTagName('item');
  
    const feedItems = [];
    for (let i = 0; i < items.length; i++) {
      const titleNode = items[i].getElementsByTagName('title')[0];
      const linkNode = items[i].getElementsByTagName('link')[0];
      const pubDateNode = items[i].getElementsByTagName('pubDate')[0];
      const descriptionNode = items[i].getElementsByTagName('description')[0];
  
      const title = titleNode?.textContent || '';
      const link = linkNode?.textContent || '';
      const pubDate = pubDateNode?.textContent || '';
      const description = descriptionNode?.textContent || '';
  
      feedItems.push({ title, link, pubDate, description });
    }
  
    return feedItems;
  }
  
}
