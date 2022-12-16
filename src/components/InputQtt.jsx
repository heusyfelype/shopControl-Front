import { useState } from "react"
import styled from "styled-components"

export default function InputQtt({ item, itemInfos, setItemInfos }) {
  // const [qtt, setQtt] = useState(item.qtt)
  return <StyledInput
    // className="input-item"
    type="number"
    min="1"
    max={Infinity - 1}
    value={itemInfos.qtt}
    onChange={(e) => {
      setItemInfos({ ...itemInfos, qtt: e.target.value })
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: d;
  width: 100%;
  border-width: 0 0 1pt 0;
  background-color: rgba(0,0,0,0);
  text-align: center;
  border-width: 0 0 1pt 0;
  border-style: solid;
  border-image: linear-gradient(to right, #e1e1e1, #bebebe) 1;


  :focus{
    outline: none;
  }
`