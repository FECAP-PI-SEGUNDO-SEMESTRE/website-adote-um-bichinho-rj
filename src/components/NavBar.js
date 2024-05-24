import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import LogoImg from "../assets/LogoOng.png";
import PetLove from '../assets/Petlove.png';
import Petz from '../assets/PetzLogo.png';

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    width: 100%;

    @media (max-width: 700px) {
        /* flex-direction: column; */
        align-items: flex-start;
        padding: 0;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%; 

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        display: ${props => (props.isOpen ? 'flex' : 'none')};
    }
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    color: #333;
    text-decoration: none;
    margin: 0 1em;
    background-color: #D5F0FF;
    padding: 1% 2%;
    border-radius: 1em;
    transition: 0.2s;

    &:hover {
        background-color: #F7B0D2;
        border-radius: 1em;
        color: #fff;
        
    }

    @media (max-width: 700px) {
        width: 50%;
        margin: 0.5em 0;
        padding: 1em;
    }
`;

const PetLoveImage = styled.img`
    width: 5em;
    height: 1.3em;
    object-fit: cover;
`;

const PetzImage = styled.img`
    width: 5em;
    height: 1.1em;
    object-fit: contain;
`;

const LogoImage = styled.img`
    width: 50%;
    border-radius: 50%;
    margin: 5% 0 0 5%;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(80%);
    }

    @media (max-width: 700px) {
        width: 20%;
        margin: 1em;
    }
`;

const ImageContainer = styled.div`
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    

    span {
        height: 2px;
        width: 25px;
        background: #333;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 700px) {
        display: flex;
        margin: 2em;
        transition: 0.5s;
    }
`;

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavBarContainer>
            <ImageContainer>
                <a href="../"><LogoImage src={LogoImg} /></a>
            </ImageContainer>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <MenuContainer isOpen={isOpen}>
                <StyledLink to="/adote">Adote</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
                <StyledLink to="/contato">Contato</StyledLink>
                <StyledLink to="https://adoteumbichinhorj.petlove.com.br">
                    <PetLoveImage src={PetLove} />
                </StyledLink>
                <StyledLink to="https://adoteumbichinhorj.parceiropetz.com.br/">
                    <PetzImage src={Petz} />
                </StyledLink>
            </MenuContainer>
        </NavBarContainer>
    );
}

export default NavBar;
