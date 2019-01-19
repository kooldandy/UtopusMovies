import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Movies } from './movie-model';

@Component({
    selector: 'app-movielist',
    templateUrl: './movie-list.component.html'
   // host: '{display:flex}'
})

export class MovieListComponent {
    @Input() moviesArray: Array<Movies>;
    @Input() p: number;
    @Input() itemsPerPage: number;
    constructor() { }

}
