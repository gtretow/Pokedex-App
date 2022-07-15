import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  top: 40px;
`;

export const SideBarList = styled.li`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: ${(props) => props.border || "4px solid #004a45"};
  border-radius: 12.8rem;
  font-size: 20px;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) => props.backgroundColor || "#00d68f"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1.6rem;

  &:hover {
    background-color: #004a45;
    color: #00d68f;
  }
`;

export const CreateButton = styled(SideBarItem)`
  border: 4px solid #db2c66;
  background-color: #ff3d71;
  color: white;

  &:hover {
    background-color: #db2c66;
    color: white;
  }
`;

export const PokeballImg = styled.img``;
