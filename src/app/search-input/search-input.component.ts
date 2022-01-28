import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { PokemonStore } from '../services/pokemon.store';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output()
  filterPokemon = new EventEmitter();

  @Output()
  showFilteredPokemon = new EventEmitter();

  value = '';
  checked = false;
  isWishlist: boolean = false;
  isCaught: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch(searchInput: string) {
    this.filterPokemon.emit(searchInput);
  }

  onCaughtCheck(event: any) {
    if (event.checked) {
      this.showFilteredPokemon.emit({isCaught: event.checked, isWishlist: this.isWishlist} );
    } else {
      this.showFilteredPokemon.emit({isCaught: event.checked, isWishlist: this.isWishlist} );
    }
  }

  onWishlistCheck(event: any) {
    if (event.checked) {
      this.showFilteredPokemon.emit({isCaught: this.isCaught, isWishlist: event.checked} );
    } else {
      this.showFilteredPokemon.emit({isCaught: this.isCaught, isWishlist: event.checked} );
    }
  }
}
