import styled from "styled-components";
import { StyledBox, StyledContainer, StyledLink } from "./SignIn";
import Logo from "../components/Logo";
import FormsSignup from "../components/FormsSignup";
import { GradientBackground } from "../assets/GeneralStyles";

export default function SignUp() {
    return (
        <Body>
            <StyledContainer
                initial={{ opacity: 0, scale: 0.80 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{opacity: 0}}
                transition={{
                    default: {
                        duration: 0.3,
                    },
                    scale: {
                        type: "spring",
                        damping: 3,
                        stiffness: 50,
                    }
                }}
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