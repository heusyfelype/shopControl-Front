import { useState } from "react"
import styled from "styled-components"

export default function InputVol({ item, itemInfos, setItemInfos }) {
  const [vol, setQtt] = useState(item.vol)
  return <StyledInput
    // className="input-item"
    type="text"
    min="1"
    max={Infinity - 1}
    value={itemInfos.vol}
    onChange={(e) => {
      setItemInfos({ ...itemInfos, vol: e.target.value })
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: g;
  width: 100%;

  border-width: 0 0 1pt 0;
  border-style: solid;
  border-image: linear-gradient(to right, #e1e1e1, #bebebe) 1;
  background-color: rgba(0,0,0,0);
  text-align: center;

  :focus{
    outline: none;
  }
`