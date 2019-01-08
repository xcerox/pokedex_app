import { createReducer } from '../../utils/factories/create-reducer';
import { DETAIL_FETCH_INIT, DETAIL_FETCH_COMPLETE, DETAIL_FETCH_ERROR } from '../../utils/constans/detail-const';

const init = {
  isLoading: false,
  info: {
    code: 0,
    types: [],
    stats: []
  },
  err: null
}

const handler = {

  [DETAIL_FETCH_INIT]: (state, action) => {
    return { info: init.info, err: null, isLoading: true };
  },
  [DETAIL_FETCH_COMPLETE]: (state, action) => {
    return { info: action.payload, err: null, isLoading: false };
  },
  [DETAIL_FETCH_ERROR]: (state, action) => {
    return { ...state, err: action.err, isLoading: false };
  }
}

const detailReducer = createReducer(init, handler);

export { detailReducer };