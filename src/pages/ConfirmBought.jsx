import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import api from "../api";

export function ConfirmBought({ items, total, setFinishing }) {

    const [name, setName] = useState("");
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);
    const navigate = useNavigate();

    return (
        <StyledPopUp>
            <div>
                <p>Quer finalizar e salvar a compra? <br /> <br /> A próxima vez que quiseres entrar <br /> aqui, o itens estarão vazios!</p>

                <form onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        await createBought(token, items, total, name);
                        navigate("/home");
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                    <input type="text"
                        placeholder="Dê um nome a compra!"
                        value={name}
                        required
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    <button type="submit" className="green" > sim </button>
                    <button className="gray" onClick={() => { setFinishing(false) }} > não </button>
                </form>
            </div>
        </StyledPopUp>
    )
}

async function createBought(token, items, total, name) {
    const config = {
        headers: {
            authorization: token
        }
    }
    return api.post(`/bought/create`, { name, total, items }, config)
}

const StyledPopUp = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        
        padding: 30px;
        background: linear-gradient(-45deg, rgba(248,250,248,1) 0%, rgba(225,240,229,1) 50%, rgba(248,250,248,1) 100%);
        border-radius: 10px;
        box-shadow: 0px 0px 112px -39px rgba(102,95,95,1);

        form{
            padding: 30px 0px 10px 0px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        input{
            width: 100%;
            grid-column-start: 1;
            grid-column-end: 3;
            text-align: center;
            font-size: large;
            height: 50px;
        }

        p{  
            width: 100%;
            grid-column-start: 1;
            grid-column-end: 3;
            text-align: center;
            font-size: x-large;
        }
        button{
            grid-column: 1fr;
            font-size: x-large;
            padding: 15px;
            border: none;
            border-radius: 5px;
        }

        .green{
            background-image: linear-gradient(to right, rgba(11, 157, 48, 0.3), rgba(0, 163, 117, 0.3), rgba(0, 164, 168, 0.3), rgba(0, 161, 197, 0.3), rgba(84, 155, 201, 0.3));
        }

        .gray{
            background-image: linear-gradient(to right, rgba(204, 204, 204, 0.5), rgba(190, 190, 190, 0.5), rgba(204, 204, 204, 0.5), rgba(231, 231, 231, 0.5), rgba(231, 231, 231, 0.5));
        }

    }
`
