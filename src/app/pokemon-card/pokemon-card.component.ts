import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { LoadingService } from '../loading/loading.service';
import { PokemonStore } from '../services/pokemon.store';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  providers: [
    LoadingService,
  ]
})
export class PokemonCardComponent implements OnInit {
 
  pokemon: Observable<Pokemon>;
 
  constructor(private pokemonStore: PokemonStore, private route: ActivatedRoute, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonStore.getSinglePokemon(this.route.snapshot.paramMap.get('pokemon'));
    this.loadingService.showLoaderUntilCompleted(this.pokemon)
    .subscribe();
  }
}
