import { useState } from "react"
import styled from "styled-components"

export default function InputQtt({ item }) {
  const [qtt, setQtt] = useState(item.qtt)
  return <StyledInput
    // className="input-item"
    type="text"
    min="1" 
    max={Infinity-1}
    value={qtt}
    onChange={(e) => {
      setQtt(e.target.value)
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: d;
  width: 100%;
`