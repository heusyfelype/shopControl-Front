import { useState } from "react"

export default function InputBrand({ item }) {
  const [nameText, setNameText] = useState(item.brandText)
  return <input
    // className="input-item"
    type="text"
    value={nameText}
    onChange={(e) => {
      setNameText(e.target.value)
    }}
  />
}