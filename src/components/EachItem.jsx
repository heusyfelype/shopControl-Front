import { Icon } from '@iconify/react';
import { motion, Reorder, useAnimation } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import CheckBoxItem from './CheckBoxItem';
import InputBrand from './InputBrand';
import InputNameText from './InputNameText';
import InputPrice from './InputPrice';
import InputQtt from './InputQtt';
import InputVol from './InputVol';


export function Content({ item, saveReordered }) {
    // const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    const [resize, setResize] = useState(false);

    return (
        <StyledItem
            key={item.id}
            value={item}
            onDragEnd={saveReordered}
            variants={itemAnimations}
            animate={() => {
                if (resize) return resize;
                return false
            }}
            onFocus={(e) => {
                console.log(e.target)
                setResize('animate')
            }}
            onBlur={(e) => {
                setResize('visible')
            }}

            style={{
                display: 'flex',
                padding: '5pt 3pt', 
                marginBottom: '10px',
            }}
        >
            <motion.form >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CheckBoxItem item={item} />
                    <InputNameText item={item} />
                    <InputQtt item={item} />
                    <InputPrice item={item} />
                    <Icon icon="bi:three-dots-vertical" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputBrand item={item} />
                    <InputVol item={item} />
                    {/* <InputPrice item={item} /> */}
                    {/* <Icon icon="bi:three-dots-vertical" /> */}
                </div>
            </motion.form>
        </StyledItem>
    )
}

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
        height: '80px'
    }
};

const resizeAnimation = {
    closed: {
        height: '40px',
        y: 0,
        opacity: 1,
    },
    open: {
        height: '80px',
        y: 0,
        opacity: 1,
    }
}

const StyledItem = styled(Reorder.Item)`
    background: aliceblue
`