import { useState } from "react"
import styled from "styled-components";

export default function InputPrice({ item }) {
  const [price, setPrice] = useState((item.price / 100).toFixed(2).replace(".", ","))
  return <StyledPrice>
    R$ <input
      // className="input-item"
      type="text"
      style={{ width: '100%' }}
      value={price}
      onChange={(e) => {
        if (Number(e.target.value.replace(",", "")) > 9999999999) {
          return;
        }
        if (e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward") {
          setPrice((Number(e.target.value.replace(",", "")) / 100).toFixed(2).replace(".", ","))
          return;
        }
        if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== '0') {
          return;
        }
        setPrice((Number((price + e.nativeEvent.data).replace(",", "")) / 100).toFixed(2).replace(".", ","))
      }}
    />
  </StyledPrice>
}

const StyledPrice = styled.div`
  grid-area: e;
  width: 100%;
  display: flex;
  align-items: center;
`