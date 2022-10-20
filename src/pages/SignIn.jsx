import styled from "styled-components";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getToken } from "../api/BackEndConnections";
import FormsLogin from "../components/FormsLogin";
import { GradientBackground } from "../assets/GeneralStyles";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

export default function SignIn() {


    return (
        <StyledContainer initial={{ width: 0 }} animate={{ width: '100vw', transition:{duration:0.5} }} exit={{ width: window.innerWidth }} >
            <StyledBox>
                <Logo />
                <h3> A melhor forma de gerenciar <br /> as suas comprinhas de <br /> supermercado. <br /> Leve a Lixtinha com você! &#10084; </h3>
                <FormsLogin />
            </StyledBox>
            <StyledLink to="/signup">
                Ainda não tem conta?
            </StyledLink>
        </StyledContainer>
    )
}


const StyledContainer = styled(motion.div)`
    min-height: 100vh;
    background: ${GradientBackground};    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color:  rgb(253, 207, 163);
    &:visited{
        text-decoration: none;
    }
`

const StyledBox = styled.div`
    width: 80%;
    max-width: 500px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;


    h3{
        text-align: right;
        font-size: 14px;
        line-height: 1.5em;
        color:  rgb(253, 207, 163);
        font-weight: 300;
    }
`