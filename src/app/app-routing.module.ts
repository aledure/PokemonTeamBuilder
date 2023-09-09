import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ProfileComponent } from './profile/profile.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TeamContainerComponent } from './team-container/team-container.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent, pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonDetailsComponent, pathMatch: 'full', outlet: 'details'},
  { path: 'team/:id', component: TeamContainerComponent, pathMatch: 'full', outlet: 'team'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
