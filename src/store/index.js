import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;