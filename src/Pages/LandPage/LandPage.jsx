import React from 'react'
import * as S from "./styled";
import LogoSrc from "../../Assets/pngegg.png"
import { Button } from '../../Styles/Button';
import { useNavigate  } from "react-router-dom";

export default function LandPage() {
    const navigate = useNavigate ();
    const handleRouteToMap = () => { navigate("/map") };

    return (
        <S.HomeWrapper>
            <S.Container>
                <S.PokemonLogo src={LogoSrc}/>
                <Button
                    onClick={handleRouteToMap}
                    width="140px"
                    height="50px"
                    borderRadius="42px"
                    fontSize="1.6rm"
                > Start </Button>
            </S.Container>
        </S.HomeWrapper>
    )
}
