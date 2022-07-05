import styled from "styled-components";

export const Button = styled.button`
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    display: ${(props) => props.display || ""};
    border-radius: ${(props) => props.borderRadius || ""};
    font-size: ${(props) => props.fontSize || ""};
    text-transform: uppercase;
    border: 1px solid #ff3d71;
    font-weight: bold;
    line-height: 1.6;
    text-align: center;
    color: #ffffff;
    background: #ff3d71;
    cursor: pointer;
    transition: all 0.2s;

    &.icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border: 4px solid #db2c66;
      }
    
      &:hover {
        color:#ffffff;
        background-color: #db2c66;
      }
`