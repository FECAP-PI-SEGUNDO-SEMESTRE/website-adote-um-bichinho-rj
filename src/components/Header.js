import React from "react"
import NavBar from './NavBar'
import styled from "styled-components"
import LogoImg from "../assets/LogoOng.png"

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    padding: 10px 20px;
`
const LogoImage = styled.img`
    width: 50%;
    border-radius: 50%;
    margin: 5% 0 0 5%;
    transition: filter 0.3s ease;
    &:hover{
        filter: brightness(80%);
    }
`

const ImageContainer = styled.div`

`
function Header(){
    return(
        <HeaderContainer>
            <ImageContainer>
                <a href="../"><LogoImage src={LogoImg} /></a>
            </ImageContainer>
            <NavBar/>
        </HeaderContainer>
    )
}

export default Header