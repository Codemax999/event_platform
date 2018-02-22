import { Injectable } from '@angular/core';

@Injectable()
export class QueryEventsService {

  // --- Get Events ---
  getEvents(): Promise<any[]> {

    // get all events
    return fetch('assets/data/events.json')
      .then(res => res.json())
      .then(res => res.events);
  }
}
