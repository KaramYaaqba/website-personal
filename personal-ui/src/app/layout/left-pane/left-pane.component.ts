import { Component } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  standalone: true,
  imports: [],
  templateUrl: './left-pane.component.html',
  styleUrl: './left-pane.component.scss'
})
export class LeftPaneComponent {
  openLink() {
    const url = 'https://drive.google.com/file/d/1wD36KtVJ_fCtRHCEZn60rOZkF0aivxsB/view?usp=share_link'; // Replace with your link
    window.open(url, '_blank');
  }
}
