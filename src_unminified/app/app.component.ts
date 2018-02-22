import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // --- Children Components ---
  @ViewChild(SearchComponent) search: SearchComponent;

  // set child component as search 
  onActivate(component: any): void { this.search = component; }


  // --- Search Box Listener ---
  // pass search query to search page to filter results
  onSearch(searchQuery: string): void { this.search.setSearch(searchQuery); }

  // clear search results and reset 
  onClear(): void { this.search.resetSearch(); }
}
