import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../shared/services/poke-apiservice.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any;

  constructor(
    private route: ActivatedRoute,
    private pokeAPIService: PokeAPIService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idOrName = params.get('id');

      if (idOrName) {
        // get Pokemon abilities, name, and types
        this.pokeAPIService.getPokemonDetails(idOrName).subscribe(
          (data) => {
            this.pokemonDetails = data;
          },
          (error) => {
            console.error('Error fetching Pokemon details:', error);
          }
        );
      }
    });
  }
}
