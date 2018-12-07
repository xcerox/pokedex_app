const PokemonsSimplify = (pokemons) => {
  return pokemons.map((pokemon, index) => {
    pokemon.code = index + 1;
    return pokemon;
  }).filter((pokemon) => {
    return pokemon.code <= 10;
  });
}


export { PokemonsSimplify };