import { createReducer } from '../../utils/factories/create-reducer';
import { POKEN_FETCH_COMPLETE, POKEN_FETCH_ERROR, POKEN_FETCH_INIT } from '../../utils/constans/poke-const';

const init = {
  isLoading: true,
  list: [],
  err: null
}

const handler = {

  [POKEN_FETCH_INIT]: (state, action) => {
    return {  list: [], err: null, isLoading: true};
  },
  [POKEN_FETCH_COMPLETE]: (state, action) => {
    return {  list: action.payload, err: null, isLoading: false};
  },
  [POKEN_FETCH_ERROR]: (state, action) => {
    return { ...state, err: action.err, isLoading: false };
  }
}

const pokemonsReducer = createReducer(init, handler);

export { pokemonsReducer };