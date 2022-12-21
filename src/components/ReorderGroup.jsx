import { Reorder } from "framer-motion";
import { useEffect } from "react";
import { useContext } from "react";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import ItemsContext from "../context/ItemsContext";
import { EachItem } from "./EachItem";
import EachItemTest from "./EachItemTest";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function ReorderGroup() {

  const { buyingInfos } = useContext(ItemsContext);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems([...buyingInfos.items])
  }, [buyingInfos])

  const isLastChild = true
  const isFirstRendering = useRef(true)


  const saveReordered = useCallback((items) => {
    console.log("Save Reodered")
  }, [])


  return (<>
    {(items && <StyledReorderGroup
      axis="y"
      onReorder={setItems}
      values={items}
      layoutScroll
      variants={container}
      initial={'hidden'}
      animate={'visible'}
    >
      {items.map((item, index) => {
        return <EachItem
          key={item.id}
          item={item}
          ref={isFirstRendering}
          setItems={setItems}
          saveReordered={saveReordered}
          isLastChild={index === items.length - 1 ? isLastChild : !isLastChild}
        />
      })}
    </StyledReorderGroup>) || <></>}
  </>

  )
}

const StyledReorderGroup = styled(Reorder.Group)`
    height: 75vh;
    overflow-y: scroll;
    position: relative;
`

const container = {
  hidden: { height: '0', display: 'none' },
  visible: {
    display: 'block',
    height: '75vh',
    overflowY: 'scroll',
    transition: {
      default: { duration: 0.05 },
      // delayChildren: 0.75,
      staggerChildren: 0.03,
      // delay: 1
    }
  }
}