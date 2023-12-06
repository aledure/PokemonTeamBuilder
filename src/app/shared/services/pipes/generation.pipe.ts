import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generation',
})
export class GenerationPipe implements PipeTransform {
  transform(pokemonList: any[], selectedGeneration: string) {
    if (!pokemonList) {
      return [];
    }

    // Filtering by generation
    if (selectedGeneration !== 'all') {
      pokemonList = pokemonList.filter((pokemon) => {
        return pokemon.generation === selectedGeneration;
      });
    }

    return pokemonList;
  }
}
