import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FOREST_GREEN } from "../assets/GeneralStyles";


export default function ForwardBuyingButton() {
  const navigate = useNavigate()
  return (
    <StyledForwardBuyingButton
      whileHover={hoverEffect}
      animate={animateEffect}
      exit={exitEffect}
      onClick={() => { navigate("/buying") }}
    >
      <p>Iniciar ou <br /> continuar <br /> sua compra </p>
      <Icon className="styledIcon" icon="akar-icons:chevron-right" />
    </StyledForwardBuyingButton>
  )
}

const StyledForwardBuyingButton = styled(motion.div)`
    z-index: 2;
    position: absolute;
    /* background-color: ${FOREST_GREEN}; */
    display: flex;
    right: 7%;
    bottom: 5%;

    
    p{
        color: #f9ffec;
        font-weight: 700;
        font-size: 14px;
    }

    .styledIcon{
        height: 100%;
        width: 45px;
        color:  #f9ffec;
    }
`

const hoverEffect = { scale: 1.05, duration: 0.2 }
const animateEffect = {
  overflow: 'hidden',
  width: ['0px', '80px', '160px'],
  height: ['0px', '80px', '80px'],
  rotate: [-360, 0, 0],
  borderRadius: ["100%", "15%", '15px'],
  padding: '15px',

  transition: {
    duration: 1.5,
    ease: "easeInOut",
    times: [0, 0.5, 0.7],
  }

}

const exitEffect = {
  width: ['160px', '80px', '0px'],
  height: ['80px', '80px', '0px'],
  rotate: [0, 0, 360],
  borderRadius: ["15px", "15%", '100%'],
  overflow: 'hidden',
  padding: '0px',
  transition: {
    duration: 1,
    ease: "easeInOut",
    times: [0, 0.3, 0.6],
  }
}