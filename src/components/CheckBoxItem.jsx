import { useState } from "react";
import { updateItem } from "../api/BackEndConnections";
import { Icon } from "@iconify/react";
import styled from "styled-components";


const checkBox = {
  "default": <Icon className="icon icon-gray" icon='eva:square-fill' />,
  "bought": <Icon className="icon icon-green" icon='eva:checkmark-square-2-fill' />,
  "not_bought": <Icon className="icon icon-red" icon="eva:close-square-fill" />
}

export default function CheckBoxItem({ item }) {

  const [statusCheck, setStatusCheck] = useState(item.statusText);

  function changeStatus() {
    switch (statusCheck) {
      case 'default': setStatusCheck("bought"); break;
      case 'bought': setStatusCheck("not_bought"); break;
      case 'not_bought': setStatusCheck("default"); break;
    }
  }

  return (
    <StyledBoxIcon 
    onClick={() => {
      changeStatus();
      //updateAPI()
    }}>
      {checkBox[`${statusCheck}`]}
    </StyledBoxIcon>
  )
}

const StyledBoxIcon = styled.div`
  & .icon{
    font-size: 24px;
  }
`