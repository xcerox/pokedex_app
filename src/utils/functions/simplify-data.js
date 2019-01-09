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

const InfoSimplify = (pokemon, specie) => {
  
  const stats  = pokemon.stats.map(item => {
    return {
        y: item.base_stat,
        x: item.stat.name,
        label: item.base_stat,
    }
  });

  const types = pokemon.types.map(item => capitalize(item.type.name));

  const descriptions = specie.flavor_text_entries
                                .filter(game => game.language.name === 'en')
                                .map(game => {
                                  const title = capitalize(game.version.name.split('-').join(' '));
                                  return {
                                    title: title,
                                    description: capitalize(game.flavor_text.split('\n').join(' '))
                                  }
                                });

  return {
    code: pokemon.id,
    stats: stats,
    types: types,
    descriptions: descriptions
  }
}

export { PokemonsSimplify, InfoSimplify };