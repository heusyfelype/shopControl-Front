import { Icon } from "@iconify/react";
import { useContext } from "react";
import styled from "styled-components";
import { deleteItem, updateAllItems } from "../api/BackEndConnections";
import { reattributeIndexItems } from "../assets/auxFunction";
import ItemsContext from "../context/ItemsContext";
import HandleErrors from "./HandleErrors";

export default function ExcludeItem({ item, setItems }) {
  const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
  const { items } = useContext(ItemsContext);
  return (
    <StyledIcon
      className='icon-trash-bin'
      icon="ion:trash-bin"
      onClick={(e) => {
        e.stopPropagation();
        const updatedList = items.filter((eachItem, index) => { return item.positionIndex !== index })
        const reindexedItems = reattributeIndexItems(updatedList)
        setItems(reindexedItems);
        deleteItem(token, item.id).then(
          updateAllItems(token, reindexedItems).then().catch(HandleErrors)
        ).catch(HandleErrors)
      }}
    />
  )
}

const StyledIcon = styled(Icon)`
  display: block;
  grid-area: ff;
  position: relative;
  bottom: 0.5pt;
  padding-left: 1pt;
  color: #646464;
`