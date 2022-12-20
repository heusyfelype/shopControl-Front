import { Reorder } from "framer-motion"
import styled from "styled-components"

export default function EachItemTest({ item }) {
  return (
    <StyledItem value={item} id={item}>
      {item}
    </StyledItem>
  )
}

const StyledItem = styled(Reorder.Item)`
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow:  5px 5px 5px #e4e4e4,
             -5px -5px 5px #fcfcfc;
    display: flex;
    padding: 5pt 3pt;    
`
