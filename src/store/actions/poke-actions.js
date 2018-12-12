import { createAction, createActionThunk } from '../../utils/factories/create-action';
import { POKEN_FETCH_COMPLETE, POKEN_FETCH_ERROR, POKEN_FETCH_INIT, POKEN_UPDATE_PAGE_INIT } from '../../utils/constans/poke-const';
import PokeService from '../../utils/services/poke-service';
import { PokemonsSimplify } from '../../utils/functions/simplify-data';

const pokemonsFetchStart = createAction(POKEN_FETCH_INIT);
const pokemonsFetchComplete = createAction(POKEN_FETCH_COMPLETE, 'payload');
const pokemonsFetchError = createAction(POKEN_FETCH_ERROR, 'err');


const pokemonsFetch = createActionThunk((value, dispatch) => {
  dispatch(pokemonsFetchStart());

  PokeService
    .getAll()
    .then(({ data }) => dispatch(pokemonsFetchComplete(PokemonsSimplify(data.results))))
    .catch(err => console.log(err));
});



const pokemonsUpdatePageInit = createAction(POKEN_UPDATE_PAGE_INIT);

const pokemonsUpdatePage = createActionThunk((value, dispatch) => {
  dispatch(pokemonsUpdatePageInit());
  console.log(`complete`)
});

export { pokemonsFetch, pokemonsUpdatePage };