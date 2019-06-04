import { pokemonsCompleteHandler } from './pokemons-handler';

const config = {
  POKEN_FETCH: pokemonsCompleteHandler
}

export const pickHandler = (requestName, state, action) => {

  if (config.hasOwnProperty(requestName)) {
    return config[requestName](state, action);
  } else {
    return state;
  }
}