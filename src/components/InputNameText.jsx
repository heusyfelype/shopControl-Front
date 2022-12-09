import React from "react"
import { useState } from "react"
import styled from "styled-components"

export const InputNameText = React.forwardRef(function InputNameText({ item, isLastChild }, ref) {
  const [nameText, setNameText] = useState(item.nameText)

  if (isLastChild) {
    ref.current = false
  }

  // console.log("isLastChild: ", isLastChild, " ref: ", ref)

  return isLastChild ? <StyledInput
    type="text"
    value={nameText}
    autoFocus
    onChange={(e) => {
      setNameText(e.target.value)
    }}
  /> : <StyledInput
    // className="input-item"
    type="text"
    value={nameText}
    onChange={(e) => {
      setNameText(e.target.value)
    }}
  />
}
)

const StyledInput = styled.input`
  display: block;
  grid-area: c;
  width: 100%;
`