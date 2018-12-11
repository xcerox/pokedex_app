import { createReducer } from '../../utils/factories/create-reducer';
import { POKEN_FETCH_COMPLETE, POKEN_FETCH_ERROR, POKEN_FETCH_INIT, POKEN_UPDATE_PAGE } from '../../utils/constans/poke-const';
import { next } from '../../utils/functions/infinityScroll';

const init = {
  isLoading: true,
  data: [],
  err: null,
  pages: [],
  current: 0,
  hasNext: false,
}

const handler = {

  [POKEN_FETCH_INIT]: (state, action) => {
    return {  data: [], err: null, isLoading: true, hasNext: false, pages: [], current: 0};
  },
  [POKEN_FETCH_COMPLETE]: (state, action) => {
    const page = next(action.payload, state.current);

    return {  data: action.payload, err: null, isLoading: false, current: page.page, hasNext: page.hasNext, pages: page.data};
  },
  [POKEN_FETCH_ERROR]: (state, action) => {
    return { ...state, err: action.err, isLoading: false };
  },
  [POKEN_UPDATE_PAGE]: (state, action, data) => {
    if (state.hasNext) {
      const page = next(state.data, state.current);
      return { ...state, current: page.page, hasNext: page.hasNext, pages: state.pages.concat(page.data)}
    } else {
      return { ...state };
    }
  }
}

const pokemonsReducer = createReducer(init, handler);

export { pokemonsReducer };