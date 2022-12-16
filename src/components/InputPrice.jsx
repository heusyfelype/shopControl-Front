import { useState } from "react"
import styled from "styled-components";

export default function InputPrice({ item, itemInfos, setItemInfos }) {

  const price = (itemInfos.price / 100).toFixed(2).replace(".", ",")

  return <StyledPrice>
    R$ <input
      type="text"
      style={{ width: '100%' }}
      value={price}
      onChange={(e) => {
        if (Number(e.target.value.replace(",", "")) > 9999999999) {
          return;
        }
        if (e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward") {
          setItemInfos({ ...itemInfos, price: Number(e.target.value.replace(",", "")) })
          return;
        }
        if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== '0') {
          return;
        }
        setItemInfos({ ...itemInfos, price: Number((price + e.nativeEvent.data).replace(",", "")) })
      }}
    />
  </StyledPrice>
}

const StyledPrice = styled.div`
  grid-area: e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  input{
    max-width: 70%;
    text-align: end;
    border-width: 0 0 1pt 0;
    background-color: rgba(0,0,0,0);
    border-width: 0 0 1pt 0;
    border-style: solid;
    border-image: linear-gradient(to right, #e1e1e1, #bebebe) 1;


    :focus{
      outline: none;
    }
  }
`