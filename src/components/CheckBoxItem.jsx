import { useState } from "react";
import { updateItem } from "../api/BackEndConnections";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { motion } from "framer-motion";



export default function CheckBoxItem({ item, statusCheck, setStatusCheck }) {

  function changeStatus() {
    switch (statusCheck) {
      case 'default': setStatusCheck("bought"); break;
      case 'bought': setStatusCheck("not_bought"); break;
      case 'not_bought': setStatusCheck("default"); break;
    }
  }

  return (
    <StyledBoxIcon
      whileTap={{ scale: 1.1 }}
      onClick={() => {
        changeStatus();
        //updateAPI()
      }}>
      {checkBox[`${statusCheck}`]}
    </StyledBoxIcon>
  )
}

const StyledBoxIcon = styled(motion.div)`
  grid-area: b;

  & .icon{
    font-size: 24px;
  }
`

// const statusAnimation = {
//   default: {
//     color: 'gray',
//   },
//   bought: {
//     color: 'green',
//   },
//   not_bought: {
//     color: 'red',
//   }

// }

const StyledIcon = styled(Icon)`
  color: ${props => props.color};
`

const checkBox = {
  "default": <StyledIcon className="icon" color="gray" icon='eva:square-fill' />,
  "bought": <StyledIcon className="icon" color="green" icon='eva:checkmark-square-2-fill' />,
  "not_bought": <StyledIcon className="icon" color="red" icon="eva:close-square-fill" />
}
