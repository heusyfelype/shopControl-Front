import { Icon } from '@iconify/react';
import { motion, Reorder, useAnimation, useAnimationControls, useMotionValue } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getItems, updateItem } from '../api/BackEndConnections';
import CheckBoxItem from './CheckBoxItem';
import ExcludeItem from './ExcludeItem';
import HandleErrors from './HandleErrors';
import InputBrand from './InputBrand';
import { InputNameText } from './InputNameText';
import InputPrice from './InputPrice';
import InputQtt from './InputQtt';
import InputVol from './InputVol';
import SelectUnit from './SelectUnit';

let timeId = null;

export const EachItem = React.forwardRef(function EachItem({ item, saveReordered, setItems, isLastChild }, ref) {
    const [statusCheck, setStatusCheck] = useState(item.statusText);
    const [itemInfos, setItemInfos] = useState({ ...item })
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    // const y = useMotionValue(0)

    const itemAnimation = useAnimationControls()
    useEffect(() => {
        itemAnimation.start('visible')
    }, [])

    useEffect(() => {
        const background = defineBackground(statusCheck);
        itemAnimation.start({ backgroundImage: background });

    }, [statusCheck])

    console.log("items: ", itemInfos)

    const changeHeight = useCallback((e) => {
        if (e.type === "focus") {
            console.log("EVENT no if: ", e.type, itemAnimation)
            return setTimeout(() => {
                itemAnimation.start({ height: 80 })
            }, 200);
        }
        return itemAnimation.start('removeHeight');
    })

    // useEffect(() => {
    //     if (isLastChild && ref.current) {
    //         itemAnimation.start('animate')
    //     }
    // }, [ref.current])

    return (
        <StyledItem
            id={item.id}
            // backgroundgradient={backgroundgradient}
            value={item}
            whileDrag={{ zIndex: 2 }}
            onDragEnd={saveReordered}
            variants={itemAnimations}
            initial={'hidden'}
            animate={itemAnimation}
            onFocus={changeHeight}
            onBlur={changeHeight}
            // updateItem(token, itemInfos).then(() => {
            //     // getItems(token).then((res) => {
            //     //     setItems([...res.data.items])
            //     // })
            // }).catch(HandleErrors)
            // }}

            whileTap={{ scaleY: 1.1 }}
        >
            <StyledForm  >
                <Icon className='icon-three-dots' icon="bi:three-dots-vertical" />
                <CheckBoxItem item={item} statusCheck={statusCheck} setStatusCheck={setStatusCheck} />
                <InputNameText item={item} isLastChild={isLastChild} ref={ref} />
                <InputQtt item={item} itemInfos={itemInfos} setItemInfos={setItemInfos} />
                <InputPrice item={item} itemInfos={itemInfos} setItemInfos={setItemInfos} />
                <ExcludeItem item={item} setItems={setItems} />
                <InputBrand item={item} itemInfos={itemInfos} setItemInfos={setItemInfos} />
                <InputVol item={item} itemInfos={itemInfos} setItemInfos={setItemInfos} />
                <SelectUnit item={item} itemInfos={itemInfos} setItemInfos={setItemInfos} />
            </StyledForm>
        </StyledItem>
    )
}
)

function defineBackground(status) {
    switch (status) {
        case 'default': return 'linear-gradient(145deg, #f5f5f5, #d8d8d8)';
        case 'bought': return 'linear-gradient(145deg, #ebf2e8, #a4c4b2)';
        case 'not_bought': return 'linear-gradient(145deg, #f1e9e9, #f4b0b0)';
        default: return 'linear-gradient(145deg, #f5f5f5, #e3cdc9)';
    }
}

const itemAnimations = {
    hidden: { y: 20, opacity: 0, height: '0', },
    visible: {
        y: 0,
        opacity: 1,
        height: '40px',
        overflow: 'hidden',
        transition: { duration: 0.5, ease: "easeOut", delay: 0.5 }
    },
    animate: {
        y: 0,
        opacity: 1,
        height: 80,
        // transition: {
        //     delay: 1
        // }
    },
    removeHeight: {
        y: 0,
        opacity: 1,
        height: '40px',
        overflow: 'hidden',
        transition: {
            delay: 0.1
        }
    }
};


const StyledItem = styled(Reorder.Item)`
    width: 100%;
    margin: 8px auto 8px auto;
    border-radius: 5px;
    box-shadow:  5px 5px 5px #e4e4e4,
             -5px -5px 5px #fcfcfc;
    display: flex;
    padding: 5pt 3pt;
    background-image: linear-gradient(145deg, #f5f5f5, #d8d8d8);
    z-index: 0;

    :last-child{
        margin-bottom: 30vh;
    }
`

const StyledForm = styled(motion.form)`
    width: 100%;
    display: grid;
    grid-template-areas: 
        "a b c c c c c c c c d e e ff" 
        "0 0 f f f f f f f f g g h h"; 
    /* gap: ; */
    align-items: center;
    row-gap: 7pt;
    column-gap: 1pt;
    /* border-radius: 3pt; */

    .icon-three-dots {
        display: block;
        grid-area: a;
        /* background-color: red; */
        width: 100%;
    }
`