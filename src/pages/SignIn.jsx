import styled from "styled-components";
import { Link } from "react-router-dom";
import FormsLogin from "../components/FormsLogin";
import { BEIGE_COLOR, GradientBackground } from "../assets/GeneralStyles";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

export default function SignIn() {

    return (
        <Body>
            <StyledContainer
                initial={{ opacity: 0, scale: 0.80 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
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
                    <h3> A melhor forma de gerenciar <br /> as suas compras de <br /> supermercado. <br /> Leve a Lixtinha com você! &#10084; </h3>
                    <FormsLogin />
                </StyledBox>
                <StyledLink to="/signup">
                    Ainda não tem conta?
                </StyledLink>
            </StyledContainer>
        </Body >
    )
}

const Body = styled.div`
    height: 100vh;
    background: ${GradientBackground};
`


export const StyledContainer = styled(motion.div)`
    min-height: 100vh;
    /* background: ${GradientBackground};     */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color:  ${BEIGE_COLOR};
    &:visited{
        text-decoration: none;
    }
`

export const StyledBox = styled.div`
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
        color: ${BEIGE_COLOR};
        font-weight: 300;
    }
`