import { useEffect, useState } from "react";
import { motion, Reorder, useAnimation } from "framer-motion";
import { getItems } from "../api/BackEndConnections";
import HandleErrors from "../components/HandleErrors";
import { GradientBackground } from "../assets/GeneralStyles";
import Header from "./Header";
import { Content } from "../components/EachItem"

export default function Buying() {
    const [items, setItems] = useState();
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    // const buttonControls = useAnimation();


    useEffect(() => {
        getItems(token).then((res) => { setItems([...res.data.items]) }).catch(HandleErrors);
    }, [token])
    function reorder(items) {
        setItems([...items])
    }

    function saveReordered() {
        console.log("Drag End");
    }


    return (
        <motion.main initial={styledMain}>
            <Header />

            <motion.section
                variants={sectionVariantes}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ default: { duration: 0.5 } }}
            >
                {items && <Reorder.Group
                    className="container"
                    axis="y"
                    onReorder={reorder}
                    values={items}

                    variants={container}
                    initial='hidden'
                    animate='visible'
                    style={{
                        position: 'absolute',
                        left: '1vw',
                        bottom: '1vw',
                        right: '1vw',
                    }}
                >
                    {items.map((item) => (
                        <Content item={item} saveReordered={saveReordered} key={item.id} />
                    ))}
                </Reorder.Group>}
            </motion.section>

        </motion.main>
    );
}



const styledMain = {
    width: '100vw',
    height: '100vh',
    background: `${GradientBackground}`
}

const container = {
    hidden: { height: '0', display: 'none' },
    visible: {
        display: 'block',
        backgroundColor: 'aquamarine',
        height: '80vh',
        overflowY: 'scroll',
        transition: {
            default: { duration: 0.5 },
            delayChildren: 0.3,
            staggerChildren: 0.25
      }
    }
}

const sectionVariantes = {
    hidden: { y: '100vh', display: 'none' },
    visible: {
        y: '15vh',
        height: '85vh',
        display: 'block',
        backgroundColor: 'pink',
    },
    exit: { y: '100vh', height: 0 }
}
