import { Component } from '@angular/core';
import { QueryEventsService } from '../query-events/query-events.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // --- Component Variables ---
  allEvents: any[] = [];
  suggested: any[] = [];
  recent: any[] = [];
  search: any[] = [];
  searchQuery: string;


  // --- Constructor ---
  constructor(public eventProv: QueryEventsService) { }


  // --- On Load ---
  ngOnInit() {
    this.eventProv.getEvents()
      .then(res => {
        this.allEvents = res;
        this.setSuggested(res);
        this.setRecent(res);
      });
  }


  // --- Event Categories ---
  // suggested 
  setSuggested(events: any[]): void {

    this.suggested = events.sort((a, b) => b.event_score - a.event_score).filter((x, i) => i < 8);
  }

  // recent
  setRecent(events: any[]): void {

    this.recent = events.sort((a, b) => a.event_score - b.event_score).filter((x, i) => i < 3);
  }

  // search
  setSearch(searchQuery: string): void {
    
    if (searchQuery.length === 0) {

      // reset
      this.searchQuery = 'Search to see results';
      this.search = [];

    } else {

      // display results
      this.search = this.allEvents.filter(x => x.event_name.includes(searchQuery));
      if (this.search.length > 0) this.searchQuery = `Showing results for "${searchQuery}"`;
      else this.searchQuery = `No results for "${searchQuery}"`;
    }
  }

  // reset
  resetSearch(): void {
    this.search = [];
    this.searchQuery = undefined;
  }
}
