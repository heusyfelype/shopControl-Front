import { useState } from "react"
import styled from "styled-components"

export default function InputBrand({ item }) {
  const [nameText, setNameText] = useState(item.brandText)
  return <StyledInput
    // className="input-item"
    type="text"
    value={nameText}
    onChange={(e) => {
      setNameText(e.target.value)
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: f;
  width: 100%;
`