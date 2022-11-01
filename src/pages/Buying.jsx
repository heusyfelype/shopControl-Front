import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import api from "../api";
import { EachItem } from "./EachItem";
import { ConfirmBought } from "./ConfirmBought";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FOREST_GREEN } from "../assets/GeneralStyles";
import { motion } from "framer-motion";

const arrTest = []

export default function Buying() {
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    const [list, setList] = useState(arrTest);
    const [total, setTotal] = useState(0);
    const [finishing, setFinishing] = useState(false)

    useEffect(() => {
        getItems(token, setList, setTotal);
    }, [token])

    const onDragEnd = result => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const copyListItems = [...list];
        const dragItemContent = copyListItems[source.index];
        copyListItems.splice(source.index, 1);
        copyListItems.splice(destination.index, 0, dragItemContent);
        const updatedItems = copyListItems.map((item, index) => {
            return { ...item, positionIndex: index }
        })
        setList([...updatedItems]);
        updateMany(token, updatedItems, setList, setTotal)
    };

    return (
        <StyledContainer>
            <Header />
            <StyledTotal>
                Total: R$ <p> {(total / 100).toFixed(2).replace(".", ",")} </p>
            </StyledTotal>
            <StyledBox
                variants={{
                    hidden: { y: '100vh', height: 0, display: 'none' },
                    visible: {
                        y: '15vh',
                        height: '85vh',
                        display: 'block'
                    },
                    exit: { y: '100vh', height: 0 }
                }}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ default: { duration: 0.5 } }}
            >
                <Navbar />
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="1">
                        {(provided) => {
                            return <ul
                                className="items"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {list.length > 0 ? list.map((item, index) => {

                                    function backgroundColor() {
                                        if (item.statusText === "default") {
                                            return "linear-gradient(to right, rgba(204, 204, 204, 0.5), rgba(190, 190, 190, 0.5), rgba(204, 204, 204, 0.5), rgba(231, 231, 231, 0.5), rgba(231, 231, 231, 0.5));"
                                        }
                                        if (item.statusText === "bought") {
                                            return 'linear-gradient(to right, rgba(11, 157, 48, 0.3), rgba(0, 163, 117, 0.3), rgba(0, 164, 168, 0.3), rgba(0, 161, 197, 0.3), rgba(84, 155, 201, 0.3));'
                                        }
                                        return 'linear-gradient(to right, rgba(200, 57, 57, 0.3), rgba(214, 82, 49, 0.3), rgba(225, 107, 40, 0.3), rgba(232, 133, 29, 0.3), rgba(235, 159, 18, 0.3));'
                                    }

                                    return (
                                        <Draggable draggableId={item.id.toString()} index={index} key={item.id + item.statusText}>
                                            {(provided) => {
                                                return <StyledLi
                                                    background={backgroundColor}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <EachItem item={item} setList={setList} list={list} setTotal={setTotal} />
                                                </StyledLi>

                                            }}
                                        </Draggable>
                                    )
                                }) : ""}
                                {provided.placeholder}
                                <StyledNewItem className="new-item"
                                    onClick={() => {
                                        sendNewItem(token, setList, list, setTotal)
                                    }}
                                >
                                    Inclua um novo item
                                </StyledNewItem>
                                <StyledCancel onClick={async () => {
                                    try {
                                        await deleteMany(token);
                                        getItems(token, setList, setTotal);
                                    } catch (e) {
                                        console.log(e)
                                    }
                                }}>
                                    <Icon className="trash-icon" icon="ion:trash-bin-sharp" />
                                </StyledCancel>
                            </ul>
                        }}
                    </Droppable>
                </DragDropContext>
            </StyledBox>

            {finishing ? <ConfirmBought items={list} total={total} setFinishing={setFinishing} /> : ""}
            {/* <Footer setFinishing={setFinishing} /> */}
        </StyledContainer>

    )
}

export async function deleteMany(token) {
    const config = {
        headers: {
            authorization: token
        }
    }
    let req = api.delete(`/buying/deleteAll`, config)
    req.then((res) => { })
    req.catch((e) => { })
}

export function updateMany(token, items, setList, setTotal) {
    const config = {
        headers: {
            authorization: token
        }
    }
    let req = api.put(`/buying/update/many`, items, config)
    req.then((res) => {
        getItems(token, setList, setTotal)
        // setTotal(list.reduce((accum, curr) =>{return (accum.price + curr.price)}))
    })
    req.catch((e) => {
        console.log("Erro: ", e)
    })
}




export function getItems(token, setList, setTotal) {
    const config = {
        headers: {
            authorization: token
        }
    }
    let req = api.get(`/buying`, config)
    req.then((res) => {
        const { data } = res
        setList([...data.items]);
        setTotal(data.total)
        // setTotal(list.reduce((accum, curr) =>{return (accum.price + curr.price)}))
    })
    req.catch((e) => {
        console.log("Erro: ", e)
    })
}

export function sendNewItem(token, setList, list, setTotal) {
    const item = {
        "statusText": "default",
        "nameText": "",
        "brandText": "",
        "vol": 0,
        "unitText": "g",
        "price": 0,
        "qtt": 1,
        "positionIndex": list.length
    }

    const config = {
        headers: {
            authorization: token
        }
    }
    let req = api.post(`/buying`, item, config)
    req.then((res) => {
        getItems(token, setList, setTotal);
        // setTotal(list.reduce((accum, curr) =>{return (accum.price + curr.price)}))
    })
    req.catch((e) => {
        console.log("Erro: ", e)
    })
}



const StyledNewItem = styled.li`
    padding: 20px 10%;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(150,150,150,0.5);
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    left: 0px;
`

const StyledContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #d0d0d0;
    border-radius: 3px;
    background: ${FOREST_GREEN};    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const StyledBox = styled(motion.div)`
    /* margin-top: 0px;
    padding-bottom: 60px;
    width: 90%;
    max-width: 1000px;
    overflow-x: scroll;
    position: relative; */

    background-image: linear-gradient(to right top, #f6fffa, #f5fff7, #f5fff4, #f7fff0, #f9ffec);    
    width: 100%;
    max-width: 680px;
    padding: 5vh 25px 0px 25px;
    border-radius: 25px 25px 0px 0px;
    /* flex-direction: column; */
    /* align-items: center; */

    > div{
        
    }

    ul{
        display: flex;
        flex-direction: column;
        max-height: 53vh;
        overflow-y: scroll;
    }
`

const StyledLi = styled.li`
    background-image: ${(props) => props.background};
    border-bottom: 1px solid rgba(150,150,150,0.5);
    padding: 20px 0px;
    cursor: pointer;

`


const StyledTotal = styled.div`
    min-width: 150px;
    margin-top: 5vh;
    text-align: center;
    background-image: linear-gradient(to left top, rgba(5, 25, 55, 0.5), rgba(0, 77, 122, 0.5), rgba(0, 135, 147, 0.5), rgba(0, 191, 114, 0.5), rgba(168, 235, 18, 0.5));
    color: white;
    padding: 30px;
    font-size: medium;
    border-radius: 5px;

    p{
        margin-top: 10px;
        font-size: xx-large;
        font-weight: 700;
    }
`

const StyledCancel = styled.div`
    margin-top: 5px;
    width: 10%;
    max-width: 1000px;
    text-align: center;
    position: absolute;
    right: 0px;
    bottom: 15px;

    .trash-icon{
        font-size: x-large;
        color: #a52121;
    }
`