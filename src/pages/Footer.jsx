import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";


export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location: ", location.pathname)

    if (location.pathname === "/home") {
        return (
            <StyledFooter onClick={() => { navigate("/buying") }}>
                <div>
                    <p> Iniciar compra </p>
                    <Icon className="styledIcon" icon="bx:right-arrow" />
                </div>
            </StyledFooter>
        )
    }
    return (
        <StyledFooter>
            outro rodape
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    height: 80px;
    color: white;
    background-color: rgb(77, 86, 161);
    font-size: x-large;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 500px;
    }
    .styledIcon{
        font-size: xx-large;
        color: white;
        margin-left: 30px;
    }

    p, .styledIcon{
        cursor: pointer;
    }

`