import { NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { TypeFilterComponent } from './type-filter/type-filter.component';
import { GenerationFilterComponent } from './generation-filter/generation-filter.component';
import { StatsFilterComponent } from './stats-filter/stats-filter.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { PokeAPIService } from './shared/services/poke-apiservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    SearchBarComponent,
    ProfileComponent,
    HeaderComponent,
    PokemonListComponent,
    TeamBuilderComponent,
    TypeFilterComponent,
    GenerationFilterComponent,
    StatsFilterComponent,
    TeamMemberComponent,
    RecommendationsComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [
    PokeAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
