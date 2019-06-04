import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons-reducer';
import { detailReducer } from './pokemon-detail-reducer';
import { pokeFilterReducer } from './pokeFilter-reducer';
import apiReducer from './api';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: detailReducer,
  pokeFilter: pokeFilterReducer,
  api: apiReducer,
});

export default rootReducer;