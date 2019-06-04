import { pickHandler } from './config/pickHandler';

export const completeReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(INIT|COMPLETE|ERROR])/.exec(type);
  
  if (!matches) return state;  
  
  const [, requestName] = matches;

  const storeDataState = pickHandler(requestName, state, action);

  return {
    ...state,
    [requestName]: storeDataState
  };
};