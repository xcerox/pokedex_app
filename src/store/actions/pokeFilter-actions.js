import { createAction } from '../../utils/factories/create-action';
import { POKEFILTER_APPLY, POKEFILTER_CLEAR } from '../../utils/constans/pokeFilter-const';

const pokemonFilterApply = createAction(POKEFILTER_APPLY, 'payload');
const pokemonFilterClear = createAction(POKEFILTER_CLEAR);

export { pokemonFilterApply,  pokemonFilterClear};