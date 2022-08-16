import styled from "styled-components";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo_horizontal from "../assets/logo-horizontal.png"

export default function SignUp() {
    const navigate = useNavigate()
    // const { setUserData } = useContext(UserContext);
    const [inputState, setInputState] = useState({
        name: "",
        email: "",
        password: ""
    })

    function createUser(e) {
        e.preventDefault();
        let req = axios.post("http://localhost:5000/signup", inputState)
        req.then((res) => {
            const { data } = res
            navigate("/")
        })
        req.catch((e) => {
            console.log("Erro: ", e)
        })
    }
    return (
        <Styled_Container>
            <Styled_Box>
                <img src={logo_horizontal} alt="" />
                <form onSubmit={(e) => {
                    createUser(e)
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
                </form>
            </Styled_Box>
            <Link to="/">
                Já possui conta?
            </Link>
        </Styled_Container>
    )
}

const Styled_Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgb(248,250,248);
    background: linear-gradient(-45deg, rgba(248,250,248,1) 0%, rgba(225,240,229,1) 50%, rgba(248,250,248,1) 100%);    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a{
        text-decoration: none;
        display: block;
    }
`

const Styled_Box = styled.div`
    width: 80%;
    max-width: 500px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        width: 60%;
        padding: 30px 0px;
        font-size: xx-large;
        font-weight: 700;
        color: rgb(136, 195, 133);
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        input{
            display: block;
            border: none;
            width: 100%;
            height: 60px;
            text-align: center;

            &::placeholder{
                text-align: center;
                font-size: large;
                color: rgb(77, 86, 171);
                opacity: 100%;
                
            }
        }
        button{
            display: block;
            width: 100%;
            height: 60px;
            border: none;
            font-size: large;
            font-weight: 700;
            color: white;
            background-color: rgb(77, 86, 171);
            border-radius: 20px;
            cursor: pointer;
        }
    }
`