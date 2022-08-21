import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import api from "../api";
import { EachItem } from "./EachItem";
// import { useNavigate } from "react-router-dom";

const arrTest = []

export default function Buying() {
    // const navigate = useNavigate();
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(arrTest);
    const [total, setTotal] = useState(0);
    // const [total, setTotal] = useState(0)
    // console.log("TOTAL", total)
    // console.log(list)

    useEffect(() => {
        getItems(token, setList, setTotal);
    }, [token])

    const dragStart = (e, position) => {
        dragItem.current = position;
        // console.log(e.target.innerHTML, "start Position: ", position);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        // console.log(e.target.innerHTML, "enter Position: ", position);
    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        copyListItems.map((item, index) => {
            return { ...item, positionIndex: index }
        })
        dragItem.current = null;
        dragOverItem.current = null;
        updateMany(token, copyListItems, setList, setTotal)
    };

    const inputReference = useRef();

    return (
        <StyledContainer>
            <Header />
            <StyledTotal>
                Total: R$ <p> {(total / 100).toFixed(2).replace(".", ",")} </p>
            </StyledTotal>
            <StyledBox>
                <Navbar />
                <ul className="items">
                    {list.length > 0 ? list.map((item, index) => {
                        return (
                            <li key={`${item.id} + ${index} + ${item.statusText}`}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                draggable
                            >
                                <EachItem item={item} inputReference={inputReference} setList={setList} list={list} setTotal={setTotal} />
                            </li>
                        )
                    }) : ""}
                    <li className="new-item"
                        onClick={() => {
                            sendNewItem(token, setList, list, setTotal)
                        }}>
                        Inclua um novo item
                    </li>
                </ul>
            </StyledBox>
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
            <Footer />
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



const StyledContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgb(248,250,248);
    background: linear-gradient(-45deg, rgba(248,250,248,1) 0%, rgba(225,240,229,1) 50%, rgba(248,250,248,1) 100%);    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const StyledBox = styled.div`
    margin-top: 0px;
    width: 90%;
    max-width: 1000px;
    overflow-x: scroll;
    position: relative;

    > div{
        
    }

    ul{
        display: flex;
        flex-direction: column;
        min-width: 930px;
        max-height: 55vh;
        overflow-y: scroll;
    }

    ul li{
        background-color: rgb(255, 255, 255);
        border-bottom: 1px solid rgba(150,150,150,0.5);
        padding: 20px 0px;
        cursor: pointer;
    }

    ul .new-item{
        padding-left: 10%;
    }
`



const StyledTotal = styled.div`
    width: 150px;
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
    width: 90%;
    max-width: 1000px;
    text-align: end;

    .trash-icon{
        font-size: x-large;
        color: #a52121;
    }
`