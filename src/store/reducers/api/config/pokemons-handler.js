import { POKEN_FETCH_COMPLETE, POKEN_FETCH_ERROR } from '../../../../utils/constans/poke-const';

export const pokemonsCompleteHandler = (state, action) => {
  if (action.type === POKEN_FETCH_COMPLETE || action.type  === POKEN_FETCH_ERROR) {
    return action.payload
  } else {
    return [];
  }
}