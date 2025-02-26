import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent{
  movies: any[] = []; // Array che conterrà i film ricevuti dall'API

  constructor(private movieService: MovieService) {}

  // Quando il componente si inizializza, ottiene i film
  ngOnInit(): void {
    this.movieService.getMoviesPopularWeek().subscribe({
      next: (data) => {
        this.movies = data.results; // Salva i film nell'array
      },
      error: (err) => {
        console.error('Errore nel caricamento dei film:', err);
      }
    });
  }
}
