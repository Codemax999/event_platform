import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { SwipeEventsComponent } from './swipe-events/swipe-events.component';
import { ListItemComponent } from './list-item/list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { DiscoverComponent } from './discover/discover.component';
import { SearchComponent } from './search/search.component';

import { QueryEventsService } from './query-events/query-events.service';

@NgModule({
  declarations: [
    AppComponent,
    SwipeEventsComponent,
    ListItemComponent,
    NavbarComponent,
    ListCategoryComponent,
    DiscoverComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    QueryEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
