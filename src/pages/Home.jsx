// import { useContext } from "react"
// import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';
import Header from "./Header";
import Footer from "./Footer";
import { StyledContainer } from "./SignIn";
import { BEIGE_COLOR, FOREST_GREEN, GradientBackground } from "../assets/GeneralStyles";
import { delay, motion } from "framer-motion";
import check_img from "../assets/check.png";
import { hover } from "@testing-library/user-event/dist/hover";


export default function Home() {
    const navigate = useNavigate();
    // const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    return (
        <Body>

            {/* <StyledContainer> */}
            <Header />
            <StyledBox
                variants={{
                    hidden: { y: '100vh', height: 0, display: 'none' },
                    visible: {
                        y: '15vh',
                        height: '85vh',
                        display: 'flex'
                    },
                    exit: { y: '100vh', height: 0 }
                }}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ default: { duration: 0.5 } }}
            >

                <img src={check_img} alt="" />
                <motion.ul
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li variants={item}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="fluent:text-bullet-list-square-search-20-regular" />
                        <p >
                            histórico de <br /> compras
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="carbon:compare" />
                        <p >
                            compare <br />compras
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="bx:list-plus" />
                        <p >
                            crie uma lista <br /> pré-definida
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                    <motion.li variants={item}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => { navigate("/history") }}>
                        <Icon className="styledIcon" icon="fluent:arrow-trending-lines-20-filled" />
                        <p >
                            gastos por <br /> mês
                        </p>
                        <Icon className="styledIcon" icon="akar-icons:chevron-right" />
                    </motion.li>
                </motion.ul>
            </StyledBox>

            <ForwardBuyingButton
                whileHover={{ scale: 1.05, duration: 0.2 }}
                animate={{
                    width: ['0px', '80px', '160px'],
                    height: ['0px', '80px', '80px'],
                    rotate: [-360, 0, 0],
                    borderRadius: ["100%", "15%", '15px'],
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.5],
                    }
                }}
                exit={{
                    width: ['160px', '80px', '0px'],
                    height: ['80px', '80px', '0px'],
                    rotate: [0, 0, 360],
                    borderRadius: ["15px", "15%", '100%'],
                    overflow: 'hidden',
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.9],
                    }
                }}
                onClick={() => { navigate("/buying") }}
            >
                <p>Iniciar ou <br /> continuar <br /> sua compra </p>
                <Icon className="styledIcon" icon="akar-icons:chevron-right" />
            </ForwardBuyingButton>
            {/* <Footer /> */}
            {/* </StyledContainer> */}

        </Body >
    )
}

const ForwardBuyingButton = styled(motion.div)`
    z-index: 5;
    padding: 15px;
    width: 160px;
    height: 80px;
    
    position: fixed;
    right: 7vw;
    bottom: 5vh;
    background-color: ${FOREST_GREEN};
    display: flex;
    
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

const Body = styled.div`
    /* width: 100vw; */
    height: 100vh;
    background: ${GradientBackground};
    position: relative;

`

const StyledBox = styled(motion.div)`
    background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    
    width: 100%;
    padding: 5vh 25px 0px 25px;
    border-radius: 25px 25px 0px 0px;
    flex-direction: column;
    align-items: center;

    & > img {
        width: 60%;
        max-width: 300px;
        padding: 20px;
    }
    
    ul{
        width: 100%;
        max-height: min-content;
        display: flex;
        flex-direction: column;
        gap:10px;
        /* background-color: blue; */
        /* padding-bottom: 50px; */
        overflow-y: scroll;
        box-sizing: content-box;
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

        /* &:last-child{
            margin-bottom: 60px;
        } */
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
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};