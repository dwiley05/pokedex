import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit showFilteredPokemon on onCaughtCheck', () => {
    spyOn(component.showFilteredPokemon, 'emit');
    component.onCaughtCheck({isCaught: undefined, isWishlist: false });

    fixture.detectChanges();

    expect(component.showFilteredPokemon.emit).toHaveBeenCalledWith({isCaught: undefined, isWishlist: false });
  });

  it('should emit showFilteredPokemon on onWishlistCheck', () => {
    spyOn(component.showFilteredPokemon, 'emit');
    component.onWishlistCheck({isCaught: false, isWishlist: undefined });

    fixture.detectChanges();

    expect(component.showFilteredPokemon.emit).toHaveBeenCalledWith({isCaught: false, isWishlist: undefined });
  });
});
