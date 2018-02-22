import { Component, Input } from '@angular/core';

@Component({
  selector: 'swipe-events',
  templateUrl: './swipe-events.component.html',
  styleUrls: ['./swipe-events.component.scss']
})
export class SwipeEventsComponent {

  // --- Component Variables ---
  @Input() title: string;
  @Input() events: any[];
}
