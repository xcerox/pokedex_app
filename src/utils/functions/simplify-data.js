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

const InfoSimplify = (pokemon, specie, chainEvolution) => {

  const stats = pokemon.stats.map(item => {
    return {
      y: item.base_stat,
      x: item.stat.name,
      label: item.base_stat,
    }
  });

  const types = pokemon.types.map(item => capitalize(item.type.name));

  const descriptions = specie.flavor_text_entries
    .reverse()
    .filter(game => game.language.name === 'en')
    .map(game => {
      const title = capitalize(game.version.name.split('-').join(' '));
      return {
        title: title,
        description: capitalize(game.flavor_text.split('\n').join(' '))
      }
    });


  const evoluctions = getEvoluctions(chainEvolution.chain);

  return {
    code: pokemon.id,
    stats: stats,
    types: types,
    descriptions: descriptions,
    evoluctions: evoluctions,
  }
}

const getIdFromURl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];

}

const getEvoluctions = chain => {
  const evoluctions = [];

  const push = evolves => {
    evoluctions.push({
      name: evolves.species.name,
      code: getIdFromURl(evolves.species.url)
    });
  }

  const addEvoluction = evolves => {
    push(evolves);

    if (evolves['evolves_to'] != null) {
      evolves['evolves_to'].forEach(evolve => {
        addEvoluction(evolve);
      })
    }
  }

  addEvoluction(chain);

  return evoluctions;
}


export { PokemonsSimplify, InfoSimplify, getIdFromURl, getEvoluctions };