import { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";


const arrTest = [{
    "id": 1,
    "userId": 2,
    "statusText": "default",
    "nameText": "macarrão editado",
    "brandText": "Galo",
    "vol": 500,
    "unitText": "g",
    "price": 390,
    "qtt": 1
}, {
    "id": 2,
    "userId": 2,
    "statusText": "default",
    "nameText": "macarrão",
    "brandText": "Galo",
    "vol": 500,
    "unitText": "g",
    "price": 390,
    "qtt": 1
}, {
    "id": 3,
    "userId": 2,
    "statusText": "default",
    "nameText": "macarrão integral",
    "brandText": "Galo",
    "vol": 500,
    "unitText": "g",
    "price": 390,
    "qtt": 1
}, {
    "id": 4,
    "userId": 2,
    "statusText": "default",
    "nameText": "macarrão instantâneo",
    "brandText": "Galo",
    "vol": 500,
    "unitText": "g",
    "price": 390,
    "qtt": 1
}]

export default function Buying() {

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(arrTest);

    // console.log("LIST:: ", list)

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML, "start Position: ", position);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
         console.log(e.target.innerHTML, "enter Position: ", position);
    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        console.log("copyListItems: ", copyListItems)
        setList([...copyListItems]);
    };

    // const inputRef = useRef();
    return (
        <StyledContainer>
            <Header />
            <StyledBox>
                <Navbar />
                <ul className="items">
                    {list.map((item, index) => {
                        // if (index === (list.length - 1) && item.nameText === "") {
                        //     return (
                        //         <li key={index}
                        //             onDragStart={(e) => dragStart(e, index)}
                        //             onDragEnter={(e) => dragEnter(e, index)}
                        //             onDragEnd={drop}
                        //             draggable>

                        //             <EachItem item={item} />
                        //         </li>
                        //     )
                        // }
                        return (
                            <li key={item.id}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                draggable>

                                <EachItem item={item} />
                            </li>
                        )
                    })}
                    {/* <li onClick={() => {
                        setList([...list, {
                            "id": null,
                            "userId": 2,
                            "statusText": "default",
                            "nameText": "",
                            "brandText": "",
                            "vol": 0,
                            "unitText": "g",
                            "price": 0,
                            "qtt": 0
                        }])
                    }}>
                        aqui
                    </li> */}
                </ul>
            </StyledBox>
            <Footer />
        </StyledContainer>

    )
}

function EachItem({ item }) {
    // console.log(item)
    const arrCheckBox = [<Icon className="icon icon-green" icon='bi:check-square-fill' />, <Icon className="icon icon-red" icon="bi:x-square-fill" />, <Icon className="icon icon-gray" icon='bi:check-square-fill' />]
    const [iconState, setIconState] = useState(0)
    const [itemState, setItemState] = useState(item)
    return (
        <StyledItem>
            <form>
                <div className="div-chekbox" onClick={() => {
                    setIconStateFunction(iconState, setIconState)
                }}>
                    {arrCheckBox[iconState]}
                </div>
                <input className="input-item"
                    type="text"
                    value={itemState.nameText}
                    onChange={(e) => {
                        setItemState({ ...itemState, nameText: e.target.value })
                    }}
                />
                <input className="input-brand"
                    type="text"
                    value={itemState.brandText}
                    onChange={(e) => {
                        setItemState({ ...itemState, brandText: e.target.value })
                    }}
                />
                <div className="div-vol">
                    <input className="input-vol"
                        type="text"
                        value={itemState.vol}
                        onChange={(e) => {
                            setItemState({ ...itemState, vol: e.target.value })
                        }} />
                    <select name="unit">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="Kg">Kg</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <input className="input-qtd"
                    type="text"
                    value={itemState.qtt}
                    onChange={(e) => {
                        setItemState({ ...itemState, qtt: e.target.value })
                    }}
                />
                <div className="div-price">
                    R$
                    <input className="input-price"
                        type="text"
                        value={itemState.price}
                        onChange={(e) => {
                            setItemState({ ...itemState, price: e.target.value })
                        }} />

                </div>
                <div className="div-icon-x">
                    <Icon icon="bi:x-lg" />
                </div>
            </form>
        </StyledItem>
    )
}

function setIconStateFunction(iconState, setIconState) {
    let i = iconState
    i++
    if (i > 2) { i = 0 }
    setIconState(i)
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
    margin-top: 150px;
    width: 90%;
    max-width: 1000px;
    overflow-x: scroll;

    ul{
        display: flex;
        flex-direction: column;
    }

    ul li{
        background-color: rgb(255, 255, 255);
        border-bottom: 1px solid rgba(150,150,150,0.5);
        padding: 20px 0px;
        cursor: pointer;
    }
`

const StyledItem = styled.div`
    
    form{
        display: flex;
        align-items: center;

        .div-chekbox{
            text-align: center;
            width: 10%;
        }
        .icon-green{
            color: green;
            font-size: x-large;
        }
        .icon-red{
            color: red;
            font-size: x-large;

        }
        .icon-gray{
            color: gray;
            font-size: x-large;

        }

        .input-item{
            height: 30px;
            border: none;
            font-size: large;
            width: 25%;
            padding-right: 3px;

            &:focus, select:focus{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        .input-brand{
            height: 30px;
            border: none;
            font-size: large;
            width: 15%;
            padding-right: 3px;

            &:focus, select:focus{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        .div-vol{
            width: 15%;
        }

        .input-vol{
            height: 30px;
            border: none;
            font-size: large;
            width: 50%;
            padding-right: 3px;

            &:focus, select:focus{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        select{
            background-color: white;
            height: 30px;
            border: none;
            font-size: large;
            width: 30%;        
        }

        .input-qtd{
            height: 30px;
            border: none;
            font-size: large;
            width: 10%;
            padding-right: 3px;

            &:focus, select:focus{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        .div-price{
            font-size: large;
            width: 15%;

            .input-price{
                width: 80%;
                height: 30px;
                border: none;
                font-size: large;
                padding-right: 3px;
                text-align: end;

                &:focus, select:focus{
                    box-shadow: 0 0 0 0;
                    border: 0 none;
                    outline: 0;
                }
            }
        }

        .div-icon-x{
            width: 10%;
            text-align: center;
        }

    }
`