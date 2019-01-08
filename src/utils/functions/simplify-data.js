import { getPagination } from './infinityScroll';
import { capitalize } from 'lodash';

const PokemonsSimplify = (pokemons, bundle = 9) => {
  return getPagination(pokemons.map((pokemon, index) => {
    pokemon.code = index + 1;
    pokemon.name = capitalize(pokemon.name);
    return pokemon;
  }).filter((pokemon) => {
    return pokemon.code <= 151;
  }), bundle);
}

const InfoSimplify = pokemon => {
  
  const stats  = pokemon.stats.map(item => {
    return {
        y: item.base_stat,
        x: item.stat.name,
        label: item.base_stat,
    }
  });

  const types = pokemon.types.map(item => capitalize(item.type.name));

  return {
    code: pokemon.id,
    stats: stats,
    types: types,
  }
}

export { PokemonsSimplify, InfoSimplify };