import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private location: Location,
  ){}

  ngOnInit(){
    const movieId = this.route.snapshot.paramMap.get('id'); 
    if(movieId){
      this.movieService.getMovieById(movieId).subscribe(data => {
        this.movie = data;
      });
    }
  }
  
  goBack() {
    if (window.history.length > 1) {
      this.location.back(); 
    } else {
      this.router.navigate(['/movies']); 
    }
  }
  

getGenreNames(): string {
   return this.movie?.genres?.map((g: any) => g.name).join(', ') || '';
}
  
}
