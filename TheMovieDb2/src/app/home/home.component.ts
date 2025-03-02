import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent{
  movies: any[] = []; 

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesPopularWeek().subscribe({
      next: (data) => {
        this.movies = data.results; 
      },
      error: (err) => {
        console.error('Errore nel caricamento dei film:', err);
      }
    });
  }
}
