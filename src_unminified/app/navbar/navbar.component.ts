import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // --- Component Variable ---
  @Output() searchQuery: EventEmitter<any> = new EventEmitter();
  @Output() searchClear: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  search: string;


  // --- On Load ---
  ngOnInit() {

    // initialize search form
    this.form = new FormGroup({ search: new FormControl('') });

    // subscribe for changes
    this.form.valueChanges.subscribe(() => {

      // validate for input and emit changes to parent
      if (this.search) this.searchQuery.emit(this.form.value.search.toLowerCase().trim());
    });
  }


  // --- Return to Discover ---
  clearSearch(): void {

    if (window.location.pathname === '/search') {
      this.search = undefined;
      this.searchClear.emit();
    }
  }


  // --- Customize ---
  // if on search page or large screen device
  searchBar(): boolean { 
    if (window.location.pathname === '/search') return true;
    else return false;
  }
}
