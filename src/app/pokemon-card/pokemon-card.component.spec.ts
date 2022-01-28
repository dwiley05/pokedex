import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let pokemonStore;
  let pokemon: Partial<Pokemon> = {name: 'pikachu', id: 1 };

  beforeEach(async () => {
     pokemonStore = { 
      getSinglePokemon: of(pokemon)
    };

    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ],
      providers: [HttpClientModule],
      imports: [HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
