import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledBox, StyledContainer, StyledLink } from "./SignIn";
import { GradientBackground } from "../assets/GeneralStyles";
import Logo from "../components/Logo";
import FormsSignup from "../components/FormsSignup";

export default function SignUp() {
    return (
        <Body>
            <StyledContainer
                initial={{ width: '0vw' }}
                animate={{ width: '100vw' }}
                exit={{ width: window.innerWidth }}
            >
                <StyledBox>
                    <Logo />
                    <FormsSignup />
                </StyledBox>
                <StyledLink to="/">
                    Já possui conta?
                </StyledLink>
            </StyledContainer>
        </Body>
    )
}

const Body = styled.div`
    height: 100vh;
    background: ${GradientBackground};
`