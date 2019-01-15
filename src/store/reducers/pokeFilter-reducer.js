import { createReducer } from '../../utils/factories/create-reducer';
import { POKEFILTER_APPLY, POKEFILTER_CLEAR } from '../../utils/constans/pokeFilter-const';

const init = {
  filter: null,
}

const handler = {

  [POKEFILTER_APPLY]: (state, action) => {
    return { filter: action.payload };
  },
  [POKEFILTER_CLEAR]: (state, action) => {
    return {filter: ''};
  }
}

const pokeFilterReducer = createReducer(init, handler);

export { pokeFilterReducer };