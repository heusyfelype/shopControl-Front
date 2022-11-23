import { getItems } from "./Buying";
import { Icon } from "@iconify/react";
import { useState } from "react";
import api from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

let timerId;

export function EachItem({ item, inputReference, setList, list, setTotal }) {
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    const checkBox = {
        "default": <Icon className="icon icon-gray" icon='eva:square-fill' />,
        "bought": <Icon className="icon icon-green" icon='eva:checkmark-square-2-fill' />,
        "not_bought": <Icon className="icon icon-red" icon="eva:close-square-fill" />
    }
    const [itemState, setItemState] = useState(item)
    // let itemStateNameText = itemState.nameText;
    // console.log("NAME TEXT: ", itemState.nameText)

    const convertedPrice = (itemState.price / 100).toFixed(2)



    return (
        <StyledItem
            variants={item}
            whileHover={{ scale: 1.01 }}
        >
            <form onBlur={() => { updateItem(token, itemState, setList, setTotal) }}>
                <div className="div-chekbox" onClick={() => {
                    const status = updateIcon(itemState.statusText);
                    updateItem(token, { ...item, statusText: status }, setList, setTotal)
                }}>
                    {checkBox[`${itemState.statusText}`]}
                </div>
                {
                    itemState.nameText === "" ?
                        <input className="input-item"
                            type="text"
                            value={itemState.nameText}
                            onChange={(e) => {
                                setItemState({ ...itemState, nameText: e.target.value })
                            }}
                        />
                        : <input className="input-item"
                            type="text"
                            value={itemState.nameText}
                            onChange={async (e) => {
                                if (timerId) { window.clearTimeout(timerId) }
                                setItemState({ ...itemState, nameText: e.target.value })
                                timerId = window.setTimeout(() => { updateItem(token, { ...itemState, nameText: e.target.value }, setList, setTotal) }, 1500)
                            }}
                        />
                }

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
                            let vol;
                            if (!e.target.value) {
                                vol = 0
                            } else {
                                vol = parseInt(e.target.value)
                            }
                            setItemState({ ...itemState, vol: vol })
                        }} />
                    <select name="unit" defaultValue={itemState.unitText} onClick={e => {
                        e.stopPropagation()
                    }}>
                        <option value="g"
                            onClick={async () => {
                                try {
                                    await updateItem(token, { ...itemState, unitText: "g" }, setList, setTotal)
                                    getItems(token, setList, setTotal)
                                } catch (e) {
                                    console.log(e)
                                }
                            }}>
                            g
                        </option>
                        <option value="ml"
                            onClick={async () => {
                                try {
                                    await updateItem(token, { ...itemState, unitText: "ml" }, setList, setTotal)
                                    getItems(token, setList, setTotal)
                                } catch (e) {
                                    console.log(e)
                                }
                            }}>
                            ml
                        </option>
                        <option value="unid"
                            onClick={async () => {
                                try {
                                    await updateItem(token, { ...itemState, unitText: "unid" }, setList, setTotal)
                                    getItems(token, setList, setTotal)
                                } catch (e) {
                                    console.log(e)
                                }
                            }}>
                            unid
                        </option>
                    </select>
                </div>
                <input className="input-qtd"
                    type="text"
                    value={itemState.qtt}
                    onChange={(e) => {
                        let qtt;
                        if (!e.target.value) {
                            qtt = 0
                        } else {
                            qtt = parseInt(e.target.value)
                        }
                        setItemState({ ...itemState, qtt: qtt })
                    }}
                />
                <div className="div-price">
                    R$
                    <input className="input-price"
                        type="text"
                        value={convertedPrice.toString().replace(".", ",")}
                        onChange={(e) => {
                            setItemState({ ...itemState, price: parseInt(e.target.value.replace(",", "")) })
                        }} />

                </div>
                <div className="div-icon-x" onClick={() => {
                    deleteItem(token, itemState.id, setList, setTotal)
                }}>
                    <Icon icon="bi:x-lg" />
                </div>
            </form>
        </StyledItem>
    )
}

function deleteItem(token, id, setList, setTotal) {
    const config = {
        headers: {
            authorization: token,
            id: id
        }
    }
    let req = api.delete(`/buying`, config)
    req.then((res) => {
        getItems(token, setList, setTotal);
        // setTotal(list.reduce((accum, curr) =>{return (accum.price + curr.price)}))
    })
    req.catch((e) => {
        console.log("Erro: ", e)
    })
}

async function updateItem(token, item, setList, setTotal) {
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

function updateIcon(status) {
    if (status === "default") {
        status = "bought"
    } else if (status === "bought") {
        status = "not_bought"
    } else {
        status = "default"
    }
    return status
}


const StyledItem = styled(motion.div)`

    
    form{
        
        display: flex;
        align-items: center;
        input{
            background-color: transparent;
        }

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
            background-color: transparent;
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

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};