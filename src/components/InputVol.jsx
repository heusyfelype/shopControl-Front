import { useState } from "react"
import styled from "styled-components"

export default function InputVol({ item }) {
  const [vol, setQtt] = useState(item.vol)
  return <StyledInput
    // className="input-item"
    type="text"
    min="1" 
    max={Infinity-1}
    value={vol}
    onChange={(e) => {
      setQtt(e.target.value)
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: g;
  width: 100%;
`