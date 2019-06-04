export const errorReducer = (state = {}, action) => {
  const { type, error } = action;
  const matches = /(.*)_(INIT|ERROR)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'ERROR' ? error : null,
  };
};