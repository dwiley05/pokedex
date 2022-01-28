import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { PokemonAPI, Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonStore {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private subject = new BehaviorSubject<Pokemon[]>([]);

  pokemon: Observable<Pokemon[]> = this.subject.asObservable();
  length: number;

  constructor(private httpClient: HttpClient) {
    this.loadPokemon();
  }

  loadNextPokemon(offset: string, limit: string) {
    let params = new HttpParams();

    params = params.append('offset', offset);
    params = params.append('limit', limit);
    return this.httpClient
      .get<PokemonAPI[]>(this.baseUrl + 'pokemon', { params: params })
      .pipe(
        map((res) => res['results']),
        shareReplay()
      );
  }

  filterPokemon(searchInput: string): Observable<Pokemon[]> {
    if (searchInput) {
      return this.pokemon.pipe(
        map((pokemonList) =>
          pokemonList.filter(pokemon => pokemon.name.includes(searchInput))
        )
      );
    } else {
      return this.pokemon;
    }
  }

  getSinglePokemon(pokemonName: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.baseUrl + 'pokemon/' + pokemonName);
  }

  private loadPokemon() {
    this.pokemon = this.httpClient
      .get<Pokemon[]>(this.baseUrl + 'pokemon?limit=1500')
      .pipe(
        tap((pokemon) => {
          this.length = pokemon['count'];
        }),
        map((pokemonList) => pokemonList['results']),
        tap((pokemon) => this.subject.next(pokemon)),
        shareReplay()
      );
  }
}
