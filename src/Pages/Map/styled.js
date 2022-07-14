import styled from "styled-components";
import img from "../../Assets/peakpx.jpg";

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: scroll;
`;

export const PokedexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokedexIcon = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    width: 120px;
    height: 120px;
  }
`;
