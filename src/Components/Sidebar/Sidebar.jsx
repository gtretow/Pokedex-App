import React from 'react'
import * as S from './styled';
import {useSelector} from "react-redux";

export default function Sidebar({editSinglePokemon}) {
  const pokemons = useSelector((state) => state.pokemons.value);

  console.log("pokemons", pokemons);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        <S.SideBarItem onClick={editSinglePokemon}>
          <S.PokeballImg />
        </S.SideBarItem>

        <S.SideBarItem>
          <S.PokeballImg/>
        </S.SideBarItem>

        <S.SideBarItem>
          <S.PokeballImg/>         
        </S.SideBarItem>

        <S.SideBarItem>
          <S.PokeballImg/>
        </S.SideBarItem>

        <S.SideBarItem>
          <S.PokeballImg/>
        </S.SideBarItem>

        <S.SideBarItem>
          <S.PokeballImg/>
        </S.SideBarItem>

        <S.SideBarItem 
          backgroundColor="#FF3D71"
          border="4px solid #DB2C66"
        >
          <S.PokeballImg/>
        </S.SideBarItem>
   
      </S.SideBarList>
    </S.SideBarWrapper>
  )
}
