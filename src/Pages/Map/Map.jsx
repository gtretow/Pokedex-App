import * as React from "react";
import * as S from "./styled";
import pokedex from "../../Assets/kindpng_2227056.png";
import grayPokeball from "../../Assets/pokeball-icon-10.jpg";
import NewPokemonModal from "../../Components/PokemonModal/NewPokemonModal";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Map() {
  const [newPokemon, setNewPokemon] = React.useState(false);
  const [editPokemon, setEditPokemon] = React.useState(false);
  const [capturedWildPokemon, setCapturedWildPokemon] = React.useState({});
  const [myPokemon, setMyPokemon] = React.useState({});

  const pokemons = useSelector((state) => state.pokemons.value);
  let maxPokemons = pokemons.length === 6;

  const managePokemon = () => {
    setEditPokemon(!editPokemon);
  };

  async function managePokedex() {
    if (maxPokemons) {
      return;
    }

    if (newPokemon) {
      setNewPokemon(false);
    }

    let number = randomIntFromInterval(1, 150);
    let response;
    try {
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
    } catch (e) {
      console.error("error getting pokemon", e);
    }

    setCapturedWildPokemon(response.data);
    setNewPokemon(!newPokemon);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getPokemonToBeEdited(pokemon) {
    setMyPokemon(pokemon);
  }

  return (
    <S.HomeWrapper>
      <Sidebar
        pokemonDataToBeEdited={getPokemonToBeEdited}
        editSinglePokemon={managePokemon}
      />
      {(newPokemon || editPokemon) && (
        <NewPokemonModal
          pokemonInfo={newPokemon ? capturedWildPokemon : myPokemon}
          newPokemon={newPokemon}
          editPokemon={editPokemon}
          closePokedex={managePokedex}
          closePokemonEdit={managePokemon}
        />
      )}
      <S.PokedexContainer>
        <S.PokedexIcon
          onClick={managePokedex}
          src={maxPokemons ? grayPokeball : pokedex}
        />
      </S.PokedexContainer>
    </S.HomeWrapper>
  );
}
