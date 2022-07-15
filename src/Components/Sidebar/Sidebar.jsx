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
        {pokemons.map((pkmns) => {
          return (
            <>
              <S.SideBarItem onClick={() => editPokemon(pkmns)}>
                <S.PokeballImg src={pkmns?.sprites?.front_default} />
              </S.SideBarItem>
            </>
          );
        })}
        {pokemons.length < 1 && <S.SideBarItem>?</S.SideBarItem>}
        {pokemons.length < 2 && <S.SideBarItem>?</S.SideBarItem>}
        {pokemons.length < 3 && <S.SideBarItem>?</S.SideBarItem>}
        {pokemons.length < 4 && <S.SideBarItem>?</S.SideBarItem>}
        {pokemons.length < 5 && <S.SideBarItem>?</S.SideBarItem>}
        {pokemons.length < 6 && <S.SideBarItem>?</S.SideBarItem>}
        <S.CreateButton> + </S.CreateButton>
      </S.SideBarList>
    </S.SideBarWrapper>
  );
}
