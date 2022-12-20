import { useEffect, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { getItems } from "../api/BackEndConnections";
import HandleErrors from "../components/HandleErrors";
import { GradientBackground } from "../assets/GeneralStyles";
import Header from "./Header";
import { EachItem } from "../components/EachItem";
import { BEIGE_COLOR } from "./../assets/GeneralStyles";
import BuyingFooter from "../components/BuyingFooter";
import { useRef } from "react";
import styled from "styled-components";
import ItemsContext from "../context/ItemsContext";
import InputSaveItem from "../components/InputSaveItem";
import { type } from "@testing-library/user-event/dist/type";

export default function Buying() {
    const [items, setItems] = useState(['a']);
    // const [showModal, setShowModal] = useState(false)
    // useEffect(() => {
    //     getItems(token).then((res) => { setItems([...res.data.items]) }).catch(HandleErrors);
    // }, [token])

    console.log("render buying")

    const isLastChild = true

    const isFirstRendering = useRef(true)

    function reorder(items) {
        setItems([...items])
    }

    function saveReordered() {
        console.log("Drag End");
    }


    return (
        <StyledMain>
            <Header />

            {items.length && <StyledBox
                // variants={{
                //     hidden: { y: '100vh', height: 0 },
                //     visible: {
                //         y: '15vh',
                //         height: '85vh',
                //         display: 'flex',
                //         backgroundColor: 'red'
                //     },
                //     exit: { y: '100vh', height: 0 }
                // }}
                initial={{ y: '100vh', height: 0, }}
                animate={{
                    y: '15vh',
                    height: '85vh',
                }}

            // exit={'exit'}
            transition={{ height: { duration: 0.5 }, y: { duration: 0.5 }, delay:.8 }}
            
            >
                {/* <ItemsContext.Provider value={{ items, setItems }}>
                    {items.length && <Reorder.Group
                        className="container"
                        axis="y"
                        onReorder={reorder}
                        values={items}

                        variants={container}
                        initial='hidden'
                        animate='visible'
                        style={{
                            position: 'absolute',
                            left: '0vw',
                            bottom: '0vw',
                            right: '0vw',
                        }}
                    >
                        {items.map((item, index) => {
                            return <EachItem
                                ref={isFirstRendering}
                                item={item}
                                setItems={setItems}
                                saveReordered={saveReordered}
                                key={item.id}
                                identificador={item.id}
                                isLastChild={index === items.length - 1 ? isLastChild : !isLastChild}
                            />
                        })}
                    </Reorder.Group> || ""}

                </ItemsContext.Provider> */}
            </StyledBox> || ""}

            <BuyingFooter items={items} setItems={setItems} /*setShowModal={setShowModal} */ />
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
    overflow-y: scroll;
`
const StyledBox = styled(motion.div)`
        background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    
        width: 100%;
        max-width: 680px;
        padding: 5vh 25px 0px 25px;
        border-radius: 25px 25px 0px 0px;
        /* flex-direction: column;
        align-items: center; */
    
    `

// const sectionVariants = {
//     hidden: { y: '50vh', height: '10vh', backgroundColor: 'red' },
//     visible: {
//         y: '15vh',
//         height: '85vh',
//         display: 'block',
//         // backgroundColor: `${BEIGE_COLOR}`,
//         backgroundImage: 'linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec)',
//         borderRadius: '20px 20px 0px 0px'
//     },
//     exit: { y: '100vh', height: 0 }
// }

const container = {
    hidden: { height: '0', display: 'none' },
    visible: {
        display: 'block',
        height: '80vh',
        overflowY: 'scroll',
        transition: {
            default: { duration: 0.5 },
            delayChildren: 0.3,
            staggerChildren: 0.05
        }
    }
}


