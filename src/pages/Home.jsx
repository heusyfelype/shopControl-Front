// import { useContext } from "react"
// import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';
import Header from "./Header";
import { BEIGE_COLOR, FOREST_GREEN, GradientBackground } from "../assets/GeneralStyles";
import { motion } from "framer-motion";
import check_img from "../assets/check.png";
import ForwardBuyingButton from "../components/ForwardBuyingButton";


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
                <ForwardBuyingButton />
            </StyledBox>

            {/* <Footer /> */}
            {/* </StyledContainer> */}

        </Body >
    )
}



const Body = styled.div`
    /* width: 100vw; */
    height: 100vh;
    background: ${GradientBackground};
    position: relative;
    display: flex;
    justify-content: center;

`

const StyledBox = styled(motion.div)`
    background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    
    width: 100%;
    max-width: 680px;
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
        align-items: center;
        gap:10px;
        /* background-color: blue; */
        /* padding-bottom: 50px; */
        overflow-y: scroll;
        box-sizing: content-box;
    }

    li{
        width: 98%;
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
    li > p{
        text-decoration: none;
        display: block;
        color: ${FOREST_GREEN};
    }

    li > .styledIcon{
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
            delayChildren: 0.35,
            staggerChildren: 0.3
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