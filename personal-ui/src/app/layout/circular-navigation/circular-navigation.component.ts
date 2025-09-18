import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circular-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circular-navigation.component.html',
  styleUrl: './circular-navigation.component.scss'
})
export class CircularNavigationComponent {
  isHovered = false;

  openLink(){
    window.open('https://v1.iamkaram.com/', '_blank');
  }
}

