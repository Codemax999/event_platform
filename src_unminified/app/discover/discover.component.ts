import { Component } from '@angular/core';
import { QueryEventsService } from '../query-events/query-events.service';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {

  // --- Component Variables ---
  thisWeek: any[] = [];
  nextWeek: any[] = [];
  highlighted: any[] = [];


  // --- Constructor ---
  constructor(public eventProv: QueryEventsService) { }


  // --- On Load ---
  ngOnInit() {

    // get and set events
    this.eventProv.getEvents()
      .then(res => {
        this.setThisWeek(res);
        this.setNextWeek(res);
        this.setHighlighted(res);
      });
  }


  // --- Event Categories ---
  // this week
  setThisWeek(events: any[]): void {

    // start: current date, end: upcoming sunday
    const base = 1505707200000;
    const startDate = moment(base).local().valueOf()
    const endDate = moment(base).isoWeekday(7).endOf('day').valueOf();

    this.thisWeek = events.filter(x => x.event_start >= startDate && x.event_start <= endDate);
  }

  // next week
  setNextWeek(events: any[]): void {

    // start: next monday, end: following sunday
    const base = 1505707200000;
    const startDate = moment(base).add(1, 'w').startOf('isoWeek').valueOf();
    const endDate = moment(base).add(1, 'w').endOf('isoWeek').valueOf();

    this.nextWeek = events.filter(x => x.event_start >= startDate && x.event_start <= endDate);
  }

  // highlighted
  setHighlighted(events: any[]): void {

    this.highlighted = events.filter(x => x.event_highlighted);
  }
}
