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
    "id": 4,
    "userId": 2,
    "statusText": "default",
    "nameText": "macarrão integral",
    "brandText": "Galo",
    "vol": 500,
    "unitText": "g",
    "price": 390,
    "qtt": 1
}, {
    "id": 5,
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

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };


    return (
        <StyledContainer>
            <Header />
            <StyledBox>
                <Navbar />
                <ul className="items">
                    {list.map((item, index) => {
                        return (
                            <li key={index}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                draggable>

                                <EachItem item={item} />
                            </li>
                        )
                    })}
                </ul>
            </StyledBox>
            <Footer />
        </StyledContainer>

    )
}

function EachItem({ item }) {
    console.log(item)
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
                <input className="input-item" type="text" value={item.nameText} />
                <input className="input-brand" type="text" value={item.brandText} />
                <div className="div-vol">
                    <input className="input-vol" type="text" placeholder="0" />
                    <select name="unit">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="Kg">Kg</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <input className="input-qtd" type="text" placeholder="0" />
                <div className="div-price">
                    R$
                    <input className="input-price" type="text" placeholder="0,00" />

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