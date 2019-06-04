import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer';
import { completeReducer } from './completeReducer';

const apiReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  complete: completeReducer,
});

export default apiReducer;