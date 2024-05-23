import React from "react"
// import { RiFacebookBoxFill } from "react-icons/ri";
import styled from "styled-components"


const link ={
    linkedin: [
    <a href="https://www.linkedin.com/in/fabrício-freitas-gomes-62b48b222/">Rodrigo Correa da Gama</a>,
    <a href="https://www.linkedin.com/in/fabrício-freitas-gomes-62b48b222/">Fabrício Freitas Gomes</a>, 
    <a href="https://www.linkedin.com/in/beatriz-d-177976252/">Beatriz de Souza Santos Rio Branco</a>, 
    <a href="https://www.linkedin.com/in/sabrinna-vicente-049225306/">Sabrinna Cristina Gomes Vicente</a>]
}

const Title = styled.h2`
    color: #FFFFFF;
` ;
const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    
`


const FooterContainer = styled.footer`
    background: linear-gradient(to left, #F7B0D2, #508E9D);
    justify-content: space-around;
    align-items: start;  
    display: flex;
`

function Footer(){
    return(
        <FooterContainer>
            <FooterList>
                <li><Title>Criadores do Site</Title></li>
                <li>{link.linkedin[0]}</li>
                <li>{link.linkedin[1]}</li>
                <li>{link.linkedin[2]}</li>
                <li>{link.linkedin[3]}</li>
            </FooterList>
            <FooterList>
                <li><Title>Parcerias</Title></li>
                <a href="https://adoteumbichinhorj.parceiropetz.com.br/" ><li>Loja Petz</li></a>
                <a href="https://adoteumbichinhorj.petlove.com.br/"><li>Loja PetLove</li></a>
            </FooterList>
            <FooterList>
                <li><Title>Criadoras da ONG</Title></li>
                <li>Giulia Di Sipio</li>
                <li>Débora Lima</li>
                <li>Maria Gabriella</li>
                <li>Shirley Calmon</li>
            </FooterList>
        </FooterContainer>
    )
}

export default Footer