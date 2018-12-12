import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons-reducer';
import { detailReducer } from './pokemon-detail-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: detailReducer,
});

export default rootReducer;