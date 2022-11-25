import { useState } from "react"

export default function InputPrice({ item }) {
  const [price, setPrice] = useState((item.price / 100).toFixed(2).replace(".", ","))
  return <>
  R$ <input
      // className="input-item"
      type="text"
      style={{width: '80px'}}
      value={price}
      onChange={(e) => {
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
  </>
}