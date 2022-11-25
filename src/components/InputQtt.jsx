import { useState } from "react"

export default function InputQtt({ item }) {
  const [qtt, setQtt] = useState(item.qtt)
  return <input
    // className="input-item"
    type="number"
    min="1" 
    max={Infinity}
    value={qtt}
    onChange={(e) => {
      setQtt(e.target.value)
    }}
  />
}