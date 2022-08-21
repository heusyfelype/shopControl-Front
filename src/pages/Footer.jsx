import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";


export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location: ", location.pathname)

    if (location.pathname === "/home") {
        return (
            <StyledFooter onClick={() => { navigate("/buying") }}>
                <div>
                    <p> Iniciar ou continuar compra </p>
                    <Icon className="styledIcon" icon="bx:right-arrow" />
                </div>
            </StyledFooter>
        )
    }
    return (
        <StyledAnotherFooter>
            <div>
                <Icon className="styledIcon" icon="bx:left-arrow" onClick={() =>{navigate("/home")}}/>
                <div>
                    <p>
                        finalizar <br /> compra
                    </p>
                    <Icon className="icon-history" icon="ic:round-history" />
                </div>
            </div>
        </StyledAnotherFooter>
    )
}

const StyledAnotherFooter = styled.div`
     position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    height: 80px;
    color: white;
    background-color: rgb(77, 86, 161);
    font-size: x-large;
    display: flex;
    align-items: center;
    justify-content: center;

    > div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1000px;
    
        div{
            font-size: medium;
            display: flex;
            justify-content: space-evenly;
            background-image: linear-gradient(to left top, rgba(5, 25, 55, 0.5), rgba(0, 77, 122, 0.5), rgba(0, 135, 147, 0.5), rgba(0, 191, 114, 0.5), rgba(168, 235, 18, 0.5));
            padding: 20px;
            width: 200px;
            border-radius: 5px;
        }

        .icon-history{
            font-size: xx-large;
        }
    }
`

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    height: 80px;
    color: white;
    background-color: rgb(77, 86, 161);
    font-size: x-large;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 1000px;
    }
    .styledIcon{
        font-size: xx-large;
        color: white;
        margin-left: 30px;
    }

    p, .styledIcon{
        cursor: pointer;
    }

`