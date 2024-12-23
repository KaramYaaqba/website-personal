import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LeftPaneComponent } from './layout/left-pane/left-pane.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { RightPaneComponent } from './layout/right-pane/right-pane.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import 'intersection-observer';
import { IntroComponent } from './features/intro/intro.component';

@Component({
  standalone: true,
  imports: [
    AboutComponent,
    IntroComponent,
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
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID, ) private platformId: Object, 
                private renderer: Renderer2, 
                private el: ElementRef) {}

  activeSection: string = 'about';

  // Get template references to sections
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('experienceSection') experienceSection!: ElementRef<HTMLElement>;
  @ViewChild('projectsSection') projectsSection!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;
  email: string = 'kyaaqba@gmail.com';

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Setup Intersection Observer
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // the ID is basically the HTML id: about, experience, projects
              this.activeSection = entry.target.id;
            }
          });
        },
        {
          // Root is the container that scrolls (the main content)
          root: document.querySelector('.main-content'),
          threshold: 0.5, // when 50% of the section is visible
        }
      );

      // Observe each of our sections
      [this.aboutSection, this.experienceSection, this.projectsSection].forEach(
        (sectionRef) => {
          this.observer.observe(sectionRef.nativeElement);
        }
      );
      this.setupIntersectionObserver();
  }
}
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // the ID is basically the HTML id: about, experience, projects
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        // Root is the container that scrolls (the main content)
        root: document.querySelector('.main-content'),
        threshold: 0.5, // when 50% of the section is visible
      }
    );
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId) as HTMLElement;
    const mainContent = document.querySelector('.main-content') as HTMLElement;
  
    if (element && mainContent) {
      // Calculate the scroll position relative to the scroll container
      const elementRect = element.getBoundingClientRect();
      const containerRect = mainContent.getBoundingClientRect();
  
      // Calculate the offset relative to the scroll container
      const scrollPosition = elementRect.top - containerRect.top;
  
      console.log('Scrolling to position:', scrollPosition);
  
      mainContent.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn('Section or container not found:', sectionId, mainContent);
    }
  }

  spotlightStyle = {
    left: '0px',
    top: '0px',
    display: 'none'
  };

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.spotlightStyle = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      display: 'block'
    };
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.spotlightStyle.display = 'none';
  }

  downloadResume() {
      const link = document.createElement('a');
      link.href = 'assets/files/resume.pdf';
      link.download = 'KaramYaaqba-Resume.pdf';
      link.click();
      link.remove();
  }
  
  
}
