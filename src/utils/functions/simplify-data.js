import { getPagination } from './infinityScroll';

const PokemonsSimplify = pokemons => {
  return getPagination(pokemons.map((pokemon, index) => {
    pokemon.code = index + 1;
    return pokemon;
  }).filter((pokemon) => {
    return pokemon.code <= 151;
    // return true;
  }), 35);
}

const InfoSimplify = pokemon => {
  
  const stats  = pokemon.stats.map(item => {
    return {
        value: item.base_stat,
        name: item.stat.name
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