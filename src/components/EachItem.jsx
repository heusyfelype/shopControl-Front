import { Icon } from '@iconify/react';
import { motion, Reorder, useMotionValue } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import CheckBoxItem from './CheckBoxItem';
import ExcludeItem from './ExcludeItem';
import InputBrand from './InputBrand';
import { InputNameText } from './InputNameText';
import InputPrice from './InputPrice';
import InputQtt from './InputQtt';
import InputVol from './InputVol';
import SelectUnit from './SelectUnit';


export const EachItem = React.forwardRef(function EachItem({ item, saveReordered, setItems, identificador, isLastChild }, ref) {
    const [resize, setResize] = useState('removeHeight');
    return (
        <StyledItem
            // key={item.id}
            value={item}
            onDragEnd={saveReordered}
            variants={itemAnimations}
            animate={() => {
                if (!ref.current) return resize;
                return false
            }}
            onFocus={(e) => {
                setResize('animate');
            }}
            onBlur={(e) => {
                setResize('removeHeight')
            }}
        >
            <StyledForm >
                {identificador}
                {/* <Icon className='icon-three-dots' icon="bi:three-dots-vertical" /> */}
                <CheckBoxItem item={item} />
                {<InputNameText item={item} isLastChild={isLastChild} ref={ref} />}
                <InputQtt item={item} />
                <InputPrice item={item} />
                <ExcludeItem item={item} setItems={setItems} />
                <InputBrand item={item} />
                <InputVol item={item} />
                <SelectUnit item={item} />
            </StyledForm>
        </StyledItem>
    )
}
)

const itemAnimations = {
    hidden: { y: 20, opacity: 0, height: '0', },
    visible: {
        y: 0,
        opacity: 1,
        height: '40px',
        overflow: 'hidden'
    },
    animate: {
        y: 0,
        opacity: 1,
        height: '80px',
        transition: {
            delay: 0
        }
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
    width: 98%;
    margin: 0 auto;
    background: aliceblue;
    display: flex;
    padding: 5pt 3pt;
    margin-bottom: 10px;
    border-radius: 3pt;
    z-index: 0;
    position: relative;
    /* box-shadow: -1px 6px 17px -4px rgba(77,70,60,0.2);
-webkit-box-shadow: -1px 6px 17px -4px rgba(77,70,60,0.2);
-moz-box-shadow: -1px 6px 17px -4px rgba(77,70,60,0.2); */
    :last-child{
        margin-bottom: 40vh;
        background-color: red;
    }
`

const StyledForm = styled(motion.form)`
    display: grid;
    grid-template-areas: 
        "a b c c c c c c d e ff" 
        "0 0 f f f f f f g h h"; 
    /* gap: ; */
    align-items: center;
    row-gap: 5pt;
    column-gap: 1pt;
    /* border-radius: 3pt; */

    .icon-three-dots {
        display: block;
        grid-area: a;
        /* background-color: red; */
        width: 100%;
    }
`