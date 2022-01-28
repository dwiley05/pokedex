import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonStore } from '../services/pokemon.store';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
 
  pokemon: Observable<Pokemon>;
 
  constructor(private pokemonStore: PokemonStore, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonStore.getSinglePokemon(this.route.snapshot.paramMap.get('pokemon'));
  }
}
