import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: false,
})
export class MoviesComponent implements OnInit {
  movies: any[] = []; // Array che conterrà i film ricevuti dall'API

  constructor(private movieService: MovieService) {}

  // Quando il componente si inizializza, ottiene i film
  ngOnInit(): void {
    this.movieService.getMoviesPopular().subscribe({
      next: (data) => {
        this.movies = data.results; // Salva i film nell'array
      },
      error: (err) => {
        console.error('Errore nel caricamento dei film:', err);
      }
    });
  }
}
