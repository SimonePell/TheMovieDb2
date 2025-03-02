import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: false,
})
export class MoviesComponent implements OnInit {
  movies: any[] = []; 

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesPopular().subscribe({
      next: (data) => {
        this.movies = data.results; 
      },
      error: (err) => {
        console.error('Errore nel caricamento dei film:', err);
      }
    });
  }
}
