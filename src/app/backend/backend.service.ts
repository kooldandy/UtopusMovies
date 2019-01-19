import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movies } from '../movies/movie-model';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  getData(url: any): Observable<Movies> {
    return this.http.get<Movies>(url)
      .pipe(
        map((res: any) => res),
        catchError((err: HttpErrorResponse) => {
          console.error(err.name, err.name);
          return of(null);
        })
      );
  }
}
