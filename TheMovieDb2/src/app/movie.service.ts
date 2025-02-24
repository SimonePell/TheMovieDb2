import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Il servizio è disponibile in tutta l'app
})
export class MovieService {
  private apiKey = '3857575925f0faaad14d639b0f165034';
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  // Iniettiamo HttpClient per fare richieste HTTP
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
}
