import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/BackEndConnections";
import { StyledForm } from "./FormsLogin";

export default function FormsSignup() {

  const navigate = useNavigate()

  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (
    <StyledForm onSubmit={(e) => {
      e.preventDefault();
      createUser(inputState).then(
        navigate("/")
      ).catch(e => console.log("Erro: ", e.response.data.message))
    }}>
      <input type="text"
        placeholder="nome"
        value={inputState.name}
        onChange={(e) => {
          setInputState({ ...inputState, name: e.target.value })
        }} />
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
      <button type="submit"> Registrar </button>
    </StyledForm>
  )
}

