
import styled from "styled-components";
import logo_principal from "../assets/logo-principal.png";

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logo_principal} alt="" />
    </StyledLogo>
  )
}

const StyledLogo = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  img{
      width: 80%;
  }
`