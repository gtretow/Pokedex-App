import * as React from 'react'
import * as M from '../../Styles/Modal'
import HandlePokemonModal from './HandlePokemonModal/HandlePokemonModal';

export default function NewPokemonModal({newPokemon, editPokemon, closePokedex, closePokemonEdit, pokemonInfo}) {
  return (
    <>
      <M.HomeWrapper
        onClick={newPokemon ? closePokedex : closePokemonEdit}
      >
      </M.HomeWrapper>
      {newPokemon &&(
        <HandlePokemonModal 
          close={closePokedex} 
          pokemonInfo={pokemonInfo}
        />
      )}
      {editPokemon &&(
        <HandlePokemonModal/>
      )}
    </>

  )
}
