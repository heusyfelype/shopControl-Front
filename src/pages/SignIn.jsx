import styled from "styled-components";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo_principal from "../assets/logo-principal.png";
import { getToken } from "../api/BackEndConnections";

export default function SignIn() {
    const navigate = useNavigate()
    const { setUserData } = useContext(UserContext);
    const [inputState, setInputState] = useState({
        email: "",
        password: ""
    })

    return (
        <StyledContainer>
            <StyledBox>
                <img src={logo_principal} alt="" />
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    getToken(inputState).then(res => {
                        const { data } = res
                        localStorage.setItem(process.env.REACT_APP_USR_DATA, data.token)
                        setUserData(data)
                        navigate("/home")
                    }).catch(e => console.log("Erro: ", e))
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
                </form>
            </StyledBox>
            <Link to="/signup">
                Ainda não tem conta?
            </Link>
        </StyledContainer>
    )
}

const GradientBackground = 'linear-gradient(30deg, rgba(66,92,89,1) 50%, #53716e 80%, rgba(66,92,89,1) 100%)'

const StyledContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${GradientBackground};    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a{
        text-decoration: none;
        display: block;
        color:  rgb(253, 207, 163);
    }
    a:visited{
        text-decoration: none;
    }
`

const StyledBox = styled.div`
    width: 80%;
    max-width: 500px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        width: 80%;
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
            background-color: rgba(0,0,0,0);
            border-bottom: 1px solid rgb(253, 207, 163);
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
            color: rgb(66,92,89);
            background-color: rgb(253, 207, 163);
            border-radius: 20px;
            cursor: pointer;
        }
    }
`