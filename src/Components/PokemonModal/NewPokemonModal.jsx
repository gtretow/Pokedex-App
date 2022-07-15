import * as React from "react";
import * as M from "../../Styles/Modal";
import HandlePokemonModal from "./HandlePokemonModal/HandlePokemonModal";

export default function NewPokemonModal({
  newPokemon,
  closePokedex,
  closePokemonEdit,
  pokemonInfo,
  editPokemon,
}) {
  return (
    <>
      <M.HomeWrapper onClick={newPokemon ? closePokedex : closePokemonEdit} />
      <HandlePokemonModal
        close={newPokemon ? closePokedex : closePokemonEdit}
        pokemonInfo={pokemonInfo}
        alreadyCaptured={editPokemon}
        closePokemonEdit={closePokemonEdit}
      />
    </>
  );
}
