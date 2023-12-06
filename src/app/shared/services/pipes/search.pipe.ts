import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(pokemonList: any[], searchTerm: string): any[] {
    if (!pokemonList || !searchTerm) {
      return pokemonList;
    }

    searchTerm = searchTerm.toLowerCase();

    return pokemonList.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchTerm);
    });
  }
}
