import styled from "styled-components";
export const HomeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #00D68F , #00D68F);
`;

export const PokemonLogo = styled.img`
    width: 600px;
    height: 350px;
    alt:"Pokemon Logo";
    margin-top: 3%;

    @media (max-width: 360px) {
        height: 250px;
        width: 300px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column

`