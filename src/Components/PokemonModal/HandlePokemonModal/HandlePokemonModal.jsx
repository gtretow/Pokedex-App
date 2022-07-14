import React from "react";
import { buttonDict } from "../../../helpers/pokemonDict";
import * as S from "./styled";
import { VscChromeClose } from "react-icons/vsc";
import { capturePokemon } from "../../../features/pokemons";
import { useDispatch } from "react-redux";

export default function HandlePokemonModal({ pokemonInfo, close }) {
  const dispatch = useDispatch();

  function catchNewPokemon() {
    dispatch(capturePokemon(pokemonInfo));
    close();
  }

  return (
    <S.StandardModal>
      <S.Container
        background={"linear-gradient(to right,#41EB89,#38F8D3)"}
        height="100px"
      >
        <S.CloseButton onClick={close}>
          <VscChromeClose size={32} />
        </S.CloseButton>
        <S.ImageCard>
          <S.Image src={pokemonInfo?.sprites?.front_default} />
        </S.ImageCard>
      </S.Container>

      <S.Container>
        <S.StatsContainer>
          <S.Container marginBottom="10px" marginTop="60px">
            <S.Text>{pokemonInfo?.name.toUpperCase()}</S.Text>
          </S.Container>
          <S.Container>
            <S.StatsContainer>
              <S.Description>HP</S.Description>
              <S.Description>{pokemonInfo?.stats[0].base_stat}</S.Description>
            </S.StatsContainer>
            <S.StatsContainer>
              <S.Description>ALTURA</S.Description>
              <S.Description>{pokemonInfo?.height}</S.Description>
            </S.StatsContainer>
            <S.StatsContainer>
              <S.Description>PESO</S.Description>
              <S.Description>{pokemonInfo?.weight}</S.Description>
            </S.StatsContainer>
          </S.Container>
        </S.StatsContainer>
      </S.Container>
      <S.Container>
        <S.StatsContainer>
          <S.Text>TIPO</S.Text>
          <S.TypeWrapper>
            {pokemonInfo?.types?.map((pkmntypes, idx) => {
              return (
                <S.Type
                  key={idx}
                  justifyContent={
                    pkmntypes.slot < 2 ? "center" : "space-between"
                  }
                >
                  <S.TypeContainer
                    background={buttonDict[pkmntypes.type.name]?.bgColor}
                    marginLeft={pkmntypes?.slot < 2 ? "0" : "10px"}
                  >
                    <S.Description>
                      {buttonDict[pkmntypes?.type.name]?.name}
                    </S.Description>
                  </S.TypeContainer>
                </S.Type>
              );
            })}
          </S.TypeWrapper>
        </S.StatsContainer>
      </S.Container>

      <S.Container>
        <S.StatsContainer>
          <S.Text>HABILIDADES</S.Text>
          <S.Container>
            {pokemonInfo?.abilities?.map((ability, idx) => {
              return (
                <S.Description key={idx}>
                  {`${ability.ability.name.toUpperCase()}, `}
                </S.Description>
              );
            })}
          </S.Container>
        </S.StatsContainer>
      </S.Container>

      <S.Container>
        <S.Container>
          <S.Text>ESTATISTICAS</S.Text>
        </S.Container>
      </S.Container>

      <S.Container>
        <S.Container>
          <S.Button onClick={catchNewPokemon} />
        </S.Container>
      </S.Container>
    </S.StandardModal>
  );
}
