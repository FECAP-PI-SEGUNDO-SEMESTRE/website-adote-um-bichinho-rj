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
`

const ImageContainer = styled.div`

`
function Header(){
    return(
        <HeaderContainer>
            <ImageContainer>
                <LogoImage src={LogoImg} />
            </ImageContainer>
            <NavBar/>
        </HeaderContainer>
    )
}

export default Header;