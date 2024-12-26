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
    balloons: { float: boolean }[] = [];
  
    produceBalloons() {
      const newBalloon = { float: false };
      this.balloons.push(newBalloon);
  
      setTimeout(() => {
        newBalloon.float = true;
      }, 2000);
    }
  }
  