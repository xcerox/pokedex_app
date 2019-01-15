import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons-reducer';
import { detailReducer } from './pokemon-detail-reducer';
import { pokeFilterReducer } from './pokeFilter-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: detailReducer,
  pokeFilter: pokeFilterReducer,
});

export default rootReducer;