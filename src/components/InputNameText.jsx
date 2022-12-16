import React from "react"
import { useState } from "react"
import styled from "styled-components"

export const InputNameText = React.forwardRef(function InputNameText({ item, isLastChild, itemInfos, setItemInfos }, ref) {
  // const [nameText, setNameText] = useState(item.nameText)

  if (isLastChild) {
    ref.current = false
  }

  // console.log("isLastChild: ", isLastChild, " ref: ", ref)

  return isLastChild ? <StyledInput
    type="text"
    value={itemInfos.nameText}
    placeholder="Insira o nome do produto"
    autoFocus
    onChange={(e) => {
      setItemInfos({ ...itemInfos, nameText: e.target.value })
    }}
  /> : <StyledInput
    // className="input-item"
    type="text"
    placeholder="Insira o nome do produto"
    value={itemInfos.nameText}
    onChange={(e) => {
      setItemInfos({ ...itemInfos, nameText: e.target.value })
    }}
  />
}
)

const StyledInput = styled.input`
  display: block;
  grid-area: c;
  width: 100%;
  border-width: 0 0 1pt 0;
  border-style: solid;
  border-image: linear-gradient(to right, #f5f5f5, #bebebe) 1;
  background-color: rgba(0,0,0,0);

  :focus{
    outline: none;
  }
`