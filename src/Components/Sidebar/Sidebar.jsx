import React from "react";
import * as S from "./styled";
import { useSelector } from "react-redux";

export default function Sidebar({ editSinglePokemon, pokemonDataToBeEdited }) {
  const pokemons = useSelector((state) => state.pokemons.value);

  function editPokemon(params) {
    pokemonDataToBeEdited(params);
    editSinglePokemon();
  }

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        <S.SideBarItem onClick={() => editPokemon(pokemons[0])}>
          <S.PokeballImg src={pokemons[0]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem onClick={() => editPokemon(pokemons[1])}>
          <S.PokeballImg src={pokemons[1]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem onClick={() => editPokemon(pokemons[2])}>
          <S.PokeballImg src={pokemons[2]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem onClick={() => editPokemon(pokemons[3])}>
          <S.PokeballImg src={pokemons[3]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem onClick={() => editPokemon(pokemons[4])}>
          <S.PokeballImg src={pokemons[4]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem onClick={() => editPokemon(pokemons[5])}>
          <S.PokeballImg src={pokemons[5]?.sprites?.front_default || ""} />
        </S.SideBarItem>

        <S.SideBarItem backgroundColor="#FF3D71" border="4px solid #DB2C66">
          <S.PokeballImg />
        </S.SideBarItem>
      </S.SideBarList>
    </S.SideBarWrapper>
  );
}
