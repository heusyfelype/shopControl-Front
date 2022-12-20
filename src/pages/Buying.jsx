import { useEffect, useState, useRef, useCallback } from "react";
import { calcLength, motion, Reorder, useAnimation } from "framer-motion";
import { getItems } from "../api/BackEndConnections";
import HandleErrors from "../components/HandleErrors";
import { GradientBackground } from "../assets/GeneralStyles";
import Header from "./Header";
import { EachItem } from "../components/EachItem";
import BuyingFooter from "../components/BuyingFooter";
import styled from "styled-components";
// import ItemsContext from "../context/ItemsContext";
import InputSaveItem from "../components/InputSaveItem";
import EachItemTest from "../components/EachItemTest";
import ReorderGroup from "../components/ReorderGroup";


export default function Buying() {
    // const [showModal, setShowModal] = useState(false)
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    const [buyingInfos, setBuyingInfos] = useState()
    useEffect(() => {
        getItems(token).then(({ data }) => setBuyingInfos(data)).catch(HandleErrors);
    }, [token])

    const enterScreen = useAnimation()

    useEffect(() => {
        enterScreen.start('visible')
    }, [])



    return (
        <StyledMain>
            <Header />

            <StyledBox
                variants={styledBoxAnimation}
                initial={'hidden'}
                animate={enterScreen}
                exit={'exit'}
            >

                {/* <ItemsContext.Provider value={{ items, setItems }}> */}
                <ReorderGroup />

                {/* </ItemsContext.Provider> */}
            </StyledBox>

            {/* <BuyingFooter items={items} setItems={setItems} setShowModal={setShowModal}  /> */}
            {/* {showModal ? <InputSaveItem items={items} setShowModal={setShowModal} /> : ""} */}
        </StyledMain >
    );
}


const StyledMain = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: ${GradientBackground};
    /* overflow-y: hidden; */
`
const StyledBox = styled(motion.div)`
        background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    
        width: 100%;
        max-width: 680px;
        padding: 5vh 25px 0px 25px;
        border-radius: 25px 25px 0px 0px;
`

console.log("window.heigth",)

const styledBoxAnimation = {
    hidden: { height: 0, y: window.innerHeight },
    visible: {
        y: window.innerHeight * 0.15,
        height: '85vh',
        transition: {
            default: { duration: 0.5, delay: 0.5 },
        }
    },
    exit: { y: window.innerHeight, height: 0 }
}

const container = {
    hidden: { height: '0', display: 'none' },
    visible: {
        display: 'block',
        height: '75vh',
        overflowY: 'scroll',
        transition: {
            default: { duration: 0.5 },
            delayChildren: 0.3,
            staggerChildren: 0.05,
            // delay: 1
        }
    }
}


