import React from 'react'
import * as S from './styled';

export default function Sidebar({editSinglePokemon}) {

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
   
      </S.SideBarList>
    </S.SideBarWrapper>
  )
}
