import styled from "styled-components"

export default function SelectUnit({ item }) {
  return (
    <StyledSelect 
    name="unit" 
    defaultValue={item.unitText} 
    onChange={(e) => {
      console.log(e.target.value)
    }}
    >
      <option value="g">g</option>
      <option value="ml" >ml</option>
      <option value="unid">unid</option>
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  grid-area: h;
`