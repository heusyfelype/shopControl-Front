import { useState } from "react"

export default function InputNameText({ item }) {
  const [nameText, setNameText] = useState(item.nameText)
  return <input
    // className="input-item"
    type="text"
    value={nameText}
    onChange={(e) => {
      setNameText(e.target.value)
    }}
  />
}