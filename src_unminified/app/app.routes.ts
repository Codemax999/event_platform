import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DiscoverComponent } from './discover/discover.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: DiscoverComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);