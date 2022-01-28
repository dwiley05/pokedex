export interface Type {
    name: string;
}

export interface Move {
    name: string;
}

export interface Moves {
    move: Move;
}

export interface Types {
    type: Type;
}

export interface Sprites {
    front_default: string;
}

export interface Stat {
    name: string;
}

export interface Stats {
    name: string;
    base_stat: number;
    stat: Stat;
}

export interface Pokemon {
    name: string;
    id: number;
    caught: boolean;
    wishlist: boolean;
    stats: Stats[];
    sprites: Sprites;
    types: Types[];
    moves: Moves[];
}

export interface PokemonAPI {
    count: number;
    results: Pokemon[];
}