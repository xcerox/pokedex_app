import { createAction, createActionThunk } from '../../utils/factories/create-action';
import { DETAIL_FETCH_INIT, DETAIL_FETCH_COMPLETE, DETAIL_FETCH_ERROR } from '../../utils/constans/detail-const';
import PokeService from '../../utils/services/poke-service';
import { InfoSimplify } from '../../utils/functions/simplify-data';

const pokemonDetailFetchStart = createAction(DETAIL_FETCH_INIT);
const pokemonDetailFetchComplete = createAction(DETAIL_FETCH_COMPLETE, 'payload');
const pokemonDetailFetchError = createAction(DETAIL_FETCH_ERROR, 'err');


const pokemonDetailFetch = createActionThunk((pokemonId, dispatch) => {
  dispatch(pokemonDetailFetchStart());

  PokeService
    .getInfoAndDescription(pokemonId)
    .then(([info, specie]) => {
        dispatch(pokemonDetailFetchComplete(InfoSimplify(info.data, specie.data)));
    })
    .catch(err => dispatch(pokemonDetailFetchError(err)));

});

export { pokemonDetailFetch };