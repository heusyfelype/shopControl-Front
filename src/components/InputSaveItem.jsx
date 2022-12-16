import { motion } from "framer-motion"
import { useState } from "react"
import styled from "styled-components"

export default function InputSaveItem({ items, setShowModal }) {
  const [namedBougth, setNamedBougth] = useState("")
  return (
    <StyledModal>
      <input required value={namedBougth} type="text" placeholder="Dê um nome para a sua compra" onChange={(e) => {
        setNamedBougth(e.target.value)
      }} />
      <button> Salvar <br /> compra </button>
    </StyledModal>
  )
}

const StyledModal = styled(motion.form)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: white;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`