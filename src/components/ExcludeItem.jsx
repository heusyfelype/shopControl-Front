import { Icon } from "@iconify/react";
import { useContext } from "react";
import styled from "styled-components";
import { deleteItem, getItems, updateAllItems, updateItem } from "../api/BackEndConnections";
import { reattributeIndexItems } from "../assets/auxFunction";
import ItemsContext from "../context/ItemsContext";

export default function ExcludeItem({ item, setItems }) {
  const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
  const allItems = useContext(ItemsContext);
  console.log("AllItems: ", allItems.items)

  return (
    <StyledIcon
      className='icon-trash-bin'
      icon="ion:trash-bin"
      onClick={(e) => {
        e.stopPropagation();
        const updatedList = allItems.items.filter((eachItem, index) => { return item.positionIndex !== index })
        const reindexedItems = reattributeIndexItems(updatedList)
        setItems(reindexedItems);
        deleteItem(token, item.id)
        updateAllItems(token, reindexedItems).then().catch((e) => console.log(e))
      }}
    />
  )
}

const StyledIcon = styled(Icon)`
  display: block;
  grid-area: ff;
`