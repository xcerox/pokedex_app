import { getPagination } from './infinityScroll';

const PokemonsSimplify = (pokemons) => {
  return getPagination(pokemons.map((pokemon, index) => {
    pokemon.code = index + 1;
    return pokemon;
  }).filter((pokemon) => {
    return pokemon.code <= 151;
    // return true;
  }), 35);
}

export { PokemonsSimplify };