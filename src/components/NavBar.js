import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PetLove from '../assets/Petlove.png'
// import Petz from '../assets/PetzLogo.png'

const NavBarContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1em;
    width: 100%;
`

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    width: auto;
    margin: 0 1em;
    &:hover{
        background-color: #000;
        border-radius: 30%;
        color:#fff;
    }
    display: flex;
    
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%; 
`;

const PLimage = styled.img`
     width: 20%;

`

function NavBar(){
    return(
        <NavBarContainer>
            <MenuContainer>
                <StyledLink to="/adote">Adote</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
                <StyledLink to="/contato">Contato</StyledLink>
                <StyledLink to="#"><PLimage src={PetLove}/></StyledLink></MenuContainer>
            {/* <ImageContainer to="#"><img src={Petz}/></ImageContainer> */}
        </NavBarContainer>
    )
}

export default NavBar