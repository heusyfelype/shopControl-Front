// import { useContext } from "react"
// import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    const navigate = useNavigate();
    // const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    return (
        <StyledContainer>
            <Header />
            <StyledBox>
                <ul>
                    <li onClick={() => { navigate("/history") }}>
                        <p >
                            histórico de <br /> compras
                        </p>
                        <Icon className="styledIcon" icon="fluent:text-bullet-list-square-search-20-regular" />
                    </li>
                    <li onClick={() => { navigate("/history") }}>
                        <p >
                            compare <br />compras
                        </p>
                        <Icon className="styledIcon" icon="carbon:compare" />
                    </li>
                    <li onClick={() => { navigate("/history") }}>
                        <p >
                            crie uma lista <br /> pré-definida
                        </p>
                        <Icon className="styledIcon" icon="bx:list-plus" />
                    </li>
                    <li onClick={() => { navigate("/history") }}>
                        <p >
                            gastos por <br /> mês
                        </p>
                        <Icon className="styledIcon" icon="fluent:arrow-trending-lines-20-filled" />
                    </li>
                </ul>
            </StyledBox>
            <Footer />
        </StyledContainer>

    )
}

const StyledContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgb(248,250,248);
    background: linear-gradient(-45deg, rgba(248,250,248,1) 0%, rgba(225,240,229,1) 50%, rgba(248,250,248,1) 100%);    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

const StyledBox = styled.div`
    width: 80%;
    max-width: 500px;
    /* height: 75vh; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; */
    
    ul{
        display: flex;
        flex-direction: column;
        gap:25px;
    }

    li{
        width: 100%;
        background-color: white;
        box-shadow: 0px 0px 31px -9px rgba(0,0,0,0.1);
        min-height: 90px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    p{
        text-decoration: none;
        display: block;
        color: rgb(77, 86, 161);
    }

    .styledIcon{
        color: rgb(77, 86, 161);
        font-size: xx-large;
    }
`

