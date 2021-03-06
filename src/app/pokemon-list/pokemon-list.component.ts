import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonStore } from '../services/pokemon.store';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public list_pokemon = new MatTableDataSource<any>([]);
  pokemon: Observable<Pokemon[]>;
  displayedColumns: string[] = ['name', 'caught', 'wishlist'];
  length: number;
  color: ThemePalette = 'warn';
  checked = false;

  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(public pokemonStore: PokemonStore) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    const loadPokemon = this.pokemonStore.filterPokemon('').subscribe((res) => {
      this.list_pokemon.data = res;
    });
  }

  filterPokemon(searchInput: string): void {
    this.pokemonStore
      .filterPokemon(searchInput.toLowerCase().trim())
      .subscribe((res) => {
        this.list_pokemon.data = res;
      });
  }

  ngAfterViewInit(): void {
    this.list_pokemon.paginator = this.paginator;
  }

  onCatchToggle(pokemon: Pokemon, event: any): void {
    if (event.checked) {
      this.pokemonStore.catchPokemon(pokemon);
    } else {
      this.pokemonStore.releasePokemon(pokemon);
    }
  }

  showFilteredPokemon(isCaught: boolean, isWishlist: boolean) {
    if (!isCaught && !isWishlist) {
      this.filterPokemon('');
    } else {
      this.pokemonStore.pokemon
        .pipe(
          map((pokemonList) => {
            this.list_pokemon.data = pokemonList.filter((pokemon) => {
              return (
                pokemon.caught === (isCaught || undefined) &&
                pokemon.wishlist === (isWishlist || undefined)
              );
            });
          })
        )
        .subscribe();
    }
  }

  onWishlistToggle(pokemon: Pokemon, event: any): void {
    if (event.checked) {
      this.pokemonStore.wishlistPokemon(pokemon);
    } else {
      this.pokemonStore.unwishlistPokemon(pokemon);
    }
  }
}
