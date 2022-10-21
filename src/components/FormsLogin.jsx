import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getToken } from "../api/BackEndConnections";
import UserContext from "../context/UserContext";


export default function FormsLogin() {
  const navigate = useNavigate()
  const { setUserData } = useContext(UserContext);
  const [inputState, setInputState] = useState({
    email: "",
    password: ""
  })
  return (
    <StyledForm onSubmit={async (e) => {
      e.preventDefault();
      getToken(inputState).then(res => {
        const { data } = res
        localStorage.setItem(process.env.REACT_APP_USR_DATA, data.token)
        setUserData(data)
        navigate("/home")
      }).catch(e => console.log("Erro: ", e.response.data.message))
    }}>
      <input type="email"
        placeholder="email@email.com"
        value={inputState.email}
        onChange={(e) => {
          setInputState({ ...inputState, email: e.target.value })
        }} />
      <input type="password"
        placeholder="senha..."
        value={inputState.password}
        onChange={(e) => {
          setInputState({ ...inputState, password: e.target.value })
        }} />
      <button type="submit"> Entrar </button>
    </StyledForm>
  )
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  input{
      display: block;
      border: none;
      color: rgba(253, 207, 163, 0.9);          
      background-color: rgba(0,0,0,0);
      border-bottom: 1px solid rgb(253, 207, 163);
      border-left: 1px solid rgb(253, 207, 163);
      width: 100%;
      height: 50px;
      text-align: center;

      &::placeholder{
          text-align: center;
          color: rgba(253, 207, 163, 0.75);          
      }
      &:focus{
        outline: none;
      }
  }
  button{
      display: block;
      width: 100%;
      height: 60px;
      border: none;
      font-size: 10px;
      font-weight: 700;
      color: rgb(66,92,89);
      background-color: rgb(253, 207, 163);
      border-radius: 5px;
      cursor: pointer;

      &:hover{
        opacity:90%      
      }
  }
`