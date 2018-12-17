import { getPagination } from './infinityScroll';

const PokemonsSimplify = (pokemons, bundle = 10) => {
  return getPagination(pokemons.map((pokemon, index) => {
    pokemon.code = index + 1;
    return pokemon;
  }).filter((pokemon) => {
    return pokemon.code <= 151;
    // return true;
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

  const types = pokemon.types.map(item => {
    return item.type.name
  }).join(' | ');

  return {
    code: pokemon.id,
    stats: stats,
    types: types,
  }
}

export { PokemonsSimplify, InfoSimplify };