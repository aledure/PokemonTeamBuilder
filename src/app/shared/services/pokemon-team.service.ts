import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonTeamService {
  private team: any[] = [];

  getTeam(): any[] {
    return this.team;
  }

  addToTeam(pokemon: any): void {
    if (this.team.length < 6) {
      this.team.push(pokemon);
    }
  }

  removeFromTeam(pokemon: any): void {
    const index = this.team.indexOf(pokemon);
    if (index !== -1) {
      this.team.splice(index, 1);
    }
  }
}
