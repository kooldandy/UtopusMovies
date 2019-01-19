import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { BackendService } from '../backend/backend.service';
import { Movies } from './movie-model';

@Component({
    selector: 'app-moviegrid',
    templateUrl: './movie-grid.component.html'
})

export class MovieGridComponent {
    @Input() moviesArray: Array<Movies>;
    @Input() p: number;
    @Input() itemsPerPage: number;
    constructor() { }

}
