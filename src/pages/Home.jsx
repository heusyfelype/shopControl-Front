// import { useContext } from "react"
// import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';
import Header from "./Header";
import Footer from "./Footer";
import { StyledContainer } from "./SignIn";
import { BEIGE_COLOR, FOREST_GREEN, GradientBackground } from "../assets/GeneralStyles";
import { motion } from "framer-motion";
import check_img from "../assets/check.png";


export default function Home() {
    const navigate = useNavigate();
    // const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    return (
        <Body>

            {/* <StyledContainer> */}
            <Header />
            <StyledBox>
                <img src={check_img} alt="" />
                <motion.ul
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li variants={item} onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="fluent:text-bullet-list-square-search-20-regular" />
                        <p >
                            histórico de <br /> compras
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item} onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="carbon:compare" />
                        <p >
                            compare <br />compras
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item} onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="bx:list-plus" />
                        <p >
                            crie uma lista <br /> pré-definida
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item} onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="fluent:arrow-trending-lines-20-filled" />
                        <p >
                            gastos por <br /> mês
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                </motion.ul>
            </StyledBox>
            {/* <Footer /> */}
            {/* </StyledContainer> */}

        </Body>
    )
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${GradientBackground};
    position: relative;

`

const StyledBox = styled.div`
    width: 100%;
    /* height: 75vh; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; */
    background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    width: 100%;
    padding: 5vh 25px 0px 25px;
    position: absolute;
    bottom: 0%;
    left: 0px;
    top: 15%;
    border-radius: 25px 25px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        width: 60%;
        padding: 20px;
    }
    
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:10px;
    }

    li{
        width: 100%;
        background-color: ${BEIGE_COLOR};
        box-shadow: 0px 0px 31px -9px rgba(0,0,0,0.2);
        min-height: 20px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;
        cursor: pointer;
    }
    p{
        text-decoration: none;
        display: block;
        color: ${FOREST_GREEN};
    }

    .styledIcon{
        color: ${FOREST_GREEN};
        font-size: xx-large;
    }
`

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};