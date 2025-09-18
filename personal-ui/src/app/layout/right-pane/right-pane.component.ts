import { Component } from '@angular/core';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-right-pane',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './right-pane.component.html',
  styleUrl: './right-pane.component.scss'
})
export class RightPaneComponent {

}
