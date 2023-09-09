import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Get a list of Pokemon
  getPokemonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=1020`);
  }

  // Get details of a specific Pokemon by ID or name
  getPokemonDetails(idOrName: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${idOrName}`);
  }
}
