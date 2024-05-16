import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PetLove from '../assets/Petlove.png'
import Petz from '../assets/PetzLogo.png'

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

const PetLoveImage = styled.img`
     width: 20%;

`
const PetzImage = styled.img`
     width: 20%;

`

function NavBar(){
    return(
        <NavBarContainer>
            <MenuContainer>
                <StyledLink to="/adote">Adote</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
                <StyledLink to="/contato">Contato</StyledLink>
                <StyledLink to="#"><PetLoveImage src={PetLove}/></StyledLink></MenuContainer>
                <StyledLink to="#"><PetzImage src={Petz}/></StyledLink>
        </NavBarContainer>
    )
}

export default NavBar