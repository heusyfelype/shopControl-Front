import { Icon } from "@iconify/react";
import styled from "styled-components";
import { getItems, updateAllItems, updateItem } from "../api/BackEndConnections";
import HandleErrors from "./HandleErrors";

export default function BuyingFooter({ items = [], setItems }) {
  const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
  // const updateItemsList = [...items]

  return (
    <StyledNav>
      <StyledIcon
        icon="material-symbols:add-shopping-cart-rounded"
        onClick={() => {
          // updateItemsList.push(newItemTemplate(items.length))
          updateItem(token, newItemTemplate(items.length)).then(() => {
            getItems(token).then(({data}) =>{setItems(data.items)})
          }).catch(HandleErrors)
          // setItems(updateItemsList)
        }}
      />
    </StyledNav>
  )
}


function newItemTemplate(index) {
  return {
    statusText: "default",
    brandText: "",
    nameText: "",
    positionIndex: index,
    price: 0,
    qtt: 1,
    unitText: "g",
    vol: 0
  }
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  height: 5vh;

`

const StyledIcon = styled(Icon)`
  font-size: 30px;
`