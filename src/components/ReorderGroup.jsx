import { Reorder } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import EachItemTest from "./EachItemTest";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function ReorderGroup() {

  const [items, setItems] = useState(initialItems);

  const isLastChild = true
  const isFirstRendering = useRef(true)


  const saveReordered = useCallback((items) => {
    console.log("Save Reodered")
  }, [])


  return (
    <StyledReorderGroup
      axis="y"
      onReorder={setItems}
      values={items}
      layoutScroll={true}
      animate={true}
    >
      {items.map((item, index) => {
        return <EachItemTest
          key={item}
          item={item}
          // ref={isFirstRendering}
          // setItems={setItems}
          saveReordered={saveReordered}
          identificador={item.id}
          isLastChild={index === items.length - 1 ? isLastChild : !isLastChild}
        />
      })}
    </StyledReorderGroup>

  )
}

const StyledReorderGroup = styled(Reorder.Group)`
    max-height: 75vh;
    overflow-y: scroll;
    border: 3px solid black;
    position: relative;
`