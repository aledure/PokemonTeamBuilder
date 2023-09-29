import { Component, OnInit } from '@angular/core';
import { PokemonTeamService } from '../shared/services/pokemon-team.service';
@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss'],
})
export class TeamContainerComponent implements OnInit {
  team: any[] = [];

  constructor(private pokemonTeamService: PokemonTeamService) {}

  ngOnInit(): void {
    this.team = this.pokemonTeamService.getTeam();
  }
  removeFromTeam(pokemon: any): void {
    this.pokemonTeamService.removeFromTeam(pokemon);
    this.team = this.pokemonTeamService.getTeam();
  }
}
