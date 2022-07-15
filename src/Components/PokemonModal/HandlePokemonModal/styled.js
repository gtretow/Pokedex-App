import styled from "styled-components";
import pokeball from "../../../Assets/Pokeball-PNG-Image-Background-1.png";

export const StandardModal = styled.div`
  height: 800px;
  min-height: 600px;
  min-width: 400px;
  width: 370px;
  background: #edf1f7;
  position: absolute;
  border-radius: 7%;
  display: grid;
  grid-auto-flow: row;
  z-index: 2;
`;

export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height || ""};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || ""};
  border-radius: 30px 30px 0 0;
  margin-bottom: ${(props) => props.marginBottom || ""};
  margin-top: ${(props) => props.marginTop || ""};

  il {
    padding-left: 5px;
  }
`;

export const ImageCard = styled.div`
  border-radius: 50%;
  background: #f7f9fc;
  border: 3px solid #00d68f;
  width: 170px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 29%;
`;
export const Image = styled.img`
  height: 170px;
`;

export const Text = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

export const StatsContainer = styled(Container)`
  flex-direction: column;
`;

export const Button = styled.div`
  width: 100px;
  height: 90px;
  background: ${(props) => props.background || `url(${pokeball})`};
  background-size: 100px 90px;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Type = styled.div`
  width: 70%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  background: ${(props) => props.background || ""};
  text-align: center;
  align-items: center;
  margin-top: 5px;
`;

export const TypeWrapper = styled(Type)`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const TypeContainer = styled.div`
  width: 70%;
  height: 35px;
  border-radius: 35px;
  background: ${(props) => props.background || ""};
  padding-top: 7px;
  margin-left: ${(props) => props.marginLeft || "10px"};
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 25px;
  top: 10px;
  cursor: pointer;
`;

export const StatsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15% 0 15%;
  div {
  }
`;

export const listWrapper = styled.div`
  text-align: center;

  p {
    font-size: 15px;
  }
`;
