  import { Component, OnInit } from '@angular/core';
  import { FormControl } from '@angular/forms';
  import { Router } from '@angular/router';
  import { MovieService } from '../movie.service';
  import { debounceTime, switchMap } from 'rxjs/operators';


  @Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    standalone: false
  })
  export class SearchBarComponent implements OnInit {
    searchControl = new FormControl();
    suggestions: any[] = [];
    loading = false; 

    constructor(private movieService: MovieService, private router: Router) {}

    ngOnInit() {
      this.searchControl.valueChanges
        .pipe(
          debounceTime(300), // Ritardo per evitare troppe richieste
          switchMap(query => {
            if (!query.trim()) {
              this.suggestions = [];
              return [];
            }
            this.loading = true;
            return this.movieService.searchMovies(query);
          })
        )
        .subscribe(results => {
          this.suggestions = results;
          this.loading = false;
        });
    }

    goToDetails(movie: any) {
      this.router.navigate(['/movies', movie.id]);
      this.suggestions = []; 
    }
  }
