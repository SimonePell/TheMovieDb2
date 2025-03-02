import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MovieService {
  private apiKey = 'your_api_key';
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  getMoviesPopular(): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`);
  }
  
  getMoviesPopularWeek():Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.apiKey}`);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(query: string): Observable<any[]> {
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`)
      .pipe(map(response => response.results));
  }
}
