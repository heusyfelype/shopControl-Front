import { Icon } from "@iconify/react";
import { useCallback, useContext } from "react";
import styled from "styled-components";
import { getItems, updateAllItems, updateItem } from "../api/BackEndConnections";
import ItemsContext from "../context/ItemsContext";
import HandleErrors from "./HandleErrors";
import InputSaveItem from "./InputSaveItem";

export default function BuyingFooter({ setShowModal }) {
  const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
  const { buyingInfos, setBuyingInfos } = useContext(ItemsContext)
  const updateItemsList = [...buyingInfos.items]

  return (
    <StyledNav>
      <StyledIcon
        icon="material-symbols:add-shopping-cart-rounded"
        onClick={useCallback(() => {
          updateItemsList.push(newItemTemplate(buyingInfos.items.length));

          updateItem(token, newItemTemplate(buyingInfos.items.length))
            .then(() => {
              getItems(token).then(({ data }) => { 
                console.log("ITEMS: ", data)
                setBuyingInfos(data) })
            })
            .catch(HandleErrors);
          // setItems(updateItemsList)
        })}
      />
      <FinishIcon onClick={useCallback(() => {
        return setShowModal(true)
      })}>
        <Icon icon="ic:twotone-save-alt" />
      </FinishIcon>
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
  justify-content: space-around;
  height: 5vh;

`

const StyledIcon = styled(Icon)`
  font-size: 30px;
`

const FinishIcon = styled.div`
  
`