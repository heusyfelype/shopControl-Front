import styled from "styled-components"

export default function SelectUnit({ item, itemInfos, setItemInfos }) {
  return (
    <StyledSelect
      name="unit"
      defaultValue={itemInfos.unitText}
      onChange={(e) => {
        setItemInfos({ ...itemInfos, unitText: e.target.value })
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
  margin-left: 2pt;
  border-radius: 3pt;
  background: linear-gradient(145deg, #ffffff, #d8d8d8);
  border: none;
  box-shadow:  1px 1px 3px #aeaeae;
  padding: 2px 3px;
  box-sizing: border-box;
  outline: none;

  :focus{
    outline: none;
  }

  
`