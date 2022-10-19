import styled from "styled-components"


export default function Navbar() {
    return (
        <StyledNav>
            <div className="status">status</div>
            <div className="item">item</div>
            <div className="marca">marca</div>
            <div className="vol">vol.</div>
            <div className="qtd">qtd.</div>
            <div className="preco">preço</div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    width: 100%;
    min-width: 930px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #e3e3e3;
    height: 80px;
    margin: 15px 0px;
    border-radius: 3px;

    div{
        color: rgb(77, 86, 161);
        font-weight: 700;
    }

    .status{
        width: 10%;
        text-align: center;

    }
    .item{
        width: 25%;
    }
    .marca{
        width: 15%;
    }
    .vol{
        width: 15%;
    }
    .qtd{
        width: 10%;
    }
    .preco{
        width: 15%;
    }

`