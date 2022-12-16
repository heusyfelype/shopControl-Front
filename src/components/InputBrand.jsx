import { useState } from "react"
import styled from "styled-components"

export default function InputBrand({ item, itemInfos, setItemInfos }) {
  return <StyledInput
    // className="input-item"
    type="text"
    value={itemInfos.brandText}
    placeholder="Insira o nome da marca"
    onChange={(e) => {
      setItemInfos({ ...itemInfos, brandText: e.target.value })
    }}
  />
}

const StyledInput = styled.input`
  display: block;
  grid-area: f;
  width: 100%;
  border-width: 0 0 1pt 0;
  border-style: solid;
  border-image: linear-gradient(to right, #f5f5f5, #bebebe) 1;
  background-color: rgba(0,0,0,0);

  :focus{
    outline: none;
  }
`