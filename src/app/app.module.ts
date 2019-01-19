import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BackendService } from './backend/backend.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieGridComponent} from './movies/movie-grid.component';
import { MovieListComponent} from './movies/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieGridComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
