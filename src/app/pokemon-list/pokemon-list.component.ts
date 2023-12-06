import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../shared/services/poke-apiservice.service';
import { Router } from '@angular/router';
import { SearchPipe } from '../shared/services/pipes/search.pipe';
import { GenerationPipe } from '../shared/services/pipes/generation.pipe';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  p: number = 1;
  searchQuery: string = '';
  pokemon: any = '';
  selectedGeneration: string = 'all';

  constructor(private pokeApiService: PokeAPIService, private router: Router) {}

  ngOnInit() {
    this.pokeApiService.getPokemonList().subscribe((data: any) => {
      this.pokemonList = data.results.map((pokemon: any, index: number) => {
        return {
          name: pokemon.name,
          id: index + 1,
          type: [],
        };
      });
      this.fetchPokemonDetails();
    });
  }

  getCardClass(pokemonType: string): string {
    const typeClasses: { [key: string]: string } = {
      grass: 'grass-type',
      fire: 'fire-type',
      water: 'water-type',
      poison: 'poison-type',
      bug: 'bug-type',
      normal: 'normal-type',
      flying: 'flying-type',
      psychic: 'psychic-type',
      dark: 'dark-type',
      electric: 'electric-type',
      ground: 'ground-type',
      fighting: 'fighting-type',
      rock: 'rock-type',
      steel: 'steel-type',
      ice: 'ice-type',
      ghost: 'ghost-type',
      dragon: 'dragon-type',
      fairy: 'fairy-type',
    };
    // Default to a neutral class if the type is not found
    return typeClasses[pokemonType] || 'bg-secondary';
  }
  navigateToDetail(id: number) {
    this.router.navigate([{ outlets: { details: ['pokemon', id] } }]);
  }
  private fetchPokemonDetails() {
    for (const pokemon of this.pokemonList) {
      this.pokeApiService
        .getPokemonDetails(pokemon.name)
        .subscribe((data: any) => {
          pokemon.type = data.types.map((type: any) => type.type.name);
        });
    }
  }
}
