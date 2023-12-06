import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  // Cache to store API responses
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  // Get a list of Pokemon
  getPokemonList(): Observable<any> {
    const cacheKey = 'pokemonList';

    // Check if data is cached, if yes, return the cached data
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    } else {
      return this.http.get(`${this.baseUrl}/pokemon?limit=1020`).pipe(
        tap((data) => {
          this.cache.set(cacheKey, data);
        }),
        catchError(this.handleError('getPokemonList', []))
      );
    }
  }

  // Get details of a specific Pokemon by ID or name
  getPokemonDetails(idOrName: string | number): Observable<any> {
    const cacheKey = `pokemonDetails-${idOrName}`;

    // Check if data is cached, if yes, return the cached data
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    } else {
      return this.http.get(`${this.baseUrl}/pokemon/${idOrName}`).pipe(
        tap((data) => {
          this.cache.set(cacheKey, data);
        }),
        catchError(this.handleError('getPokemonDetails', {}))
      );
    }
  }

  searchPokemon(searchTerm: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/pokemon/${searchTerm}`)
      .pipe(catchError(this.handleError('searchPokemon', {})));
  }

  getRandomPokemon(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/pokemon/${Math.floor(Math.random() * 1020) + 1}`)
      .pipe(catchError(this.handleError('getRandomPokemon', {})));
  }

  // Handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
