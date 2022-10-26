import { useContext } from "react"
import UserContext from "../context/UserContext"

import { Icon } from "@iconify/react";
import styled from "styled-components";
import logo_short from "../assets/logo-short.png"
import { useNavigate } from "react-router-dom";
import { BEIGE_COLOR } from "../assets/GeneralStyles";


export default function Header() {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <img src={logo_short} alt="logo" />
            <Icon className="styledIcon" icon="bi:arrow-down-square" onClick={() => {
                logOut(setUserData)
                navigate("/")
            }} />
        </StyledHeader>
    )
}
function logOut(setUserData) {
    localStorage.setItem(process.env.REACT_APP_USR_DATA, "")
    setUserData({})
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vh 7% 8vh 7%;

    img{
        display: block;
        height: 50px;
    }

    .styledIcon{
        display: block;
        font-size: xx-large;
        color: ${BEIGE_COLOR};
        opacity: 50%;
    }
`