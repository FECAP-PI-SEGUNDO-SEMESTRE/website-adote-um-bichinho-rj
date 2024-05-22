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
    font-weight: 500;
    color: #333;
    text-decoration: none;
    width: auto;
    margin: 0 1em;
    background-color: #D5F0FF;
    padding: 1% 2%;
    border-radius: 1em;
    display: flex;

    @media (max-width: 700px){
        margin: 0 0.5em;
    }

    &:hover{
        background-color: #F7B0D2;
        border-radius: 1em;
        color:#fff;
    }  
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%; 
`;

const PetLoveImage = styled.img`
     width: 5em;
     height: 1.3em;
     object-fit: cover;

`
const PetzImage = styled.img`
    width: 5em;
    height: 1.1em;
    object-fit: contain;
`

function NavBar(){
    return(
        <NavBarContainer>
            <MenuContainer>
                <StyledLink to="/adote">Adote</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
                <StyledLink to="/contato">Contato</StyledLink>
                <StyledLink to="https://adoteumbichinhorj.petlove.com.br"><PetLoveImage src={PetLove}/></StyledLink></MenuContainer>
                <StyledLink to="https://adoteumbichinhorj.parceiropetz.com.br/"><PetzImage src={Petz}/></StyledLink>
        </NavBarContainer>
    )
}

export default NavBar