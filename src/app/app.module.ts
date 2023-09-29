import { NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { PokeAPIService } from './shared/services/poke-apiservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TeamContainerComponent } from './team-container/team-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    HeaderComponent,
    PokemonListComponent,
    TeamBuilderComponent,
    TeamContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [PokeAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
