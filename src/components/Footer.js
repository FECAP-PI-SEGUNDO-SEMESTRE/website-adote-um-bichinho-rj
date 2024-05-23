import React from "react"
// import { RiFacebookBoxFill } from "react-icons/ri";
import styled, {css} from "styled-components"

const EstiloFooter = css`
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;

    &:hover {
        color: #eee;
    }
`
const StyleLink = styled.a`
${EstiloFooter}`

const StyleCreators = styled.li`
${EstiloFooter}`
 
const link ={
    linkedin: [
    <StyleLink href="https://www.linkedin.com/in/fabrício-freitas-gomes-62b48b222/">Rodrigo Correa da Gama</StyleLink>,
    <StyleLink href="https://www.linkedin.com/in/fabrício-freitas-gomes-62b48b222/">Fabrício Freitas Gomes</StyleLink>, 
    <StyleLink href="https://www.linkedin.com/in/beatriz-d-177976252/">Beatriz de Souza Santos Rio Branco</StyleLink>, 
    <StyleLink href="https://www.linkedin.com/in/sabrinna-vicente-049225306/">Sabrinna Cristina Gomes Vicente</StyleLink>]
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

    @media (max-width: 700px){
    flex-direction: column;
  }
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
                <StyleLink href="https://adoteumbichinhorj.parceiropetz.com.br/" ><li>Loja Petz</li></StyleLink>
                <StyleLink href="https://adoteumbichinhorj.petlove.com.br/"><li>Loja PetLove</li></StyleLink>
            </FooterList>
            <FooterList>
                <StyleCreators><Title>Criadoras da ONG</Title></StyleCreators>
                <StyleCreators>Giulia Di Sipio</StyleCreators>
                <StyleCreators>Débora Lima</StyleCreators>
                <StyleCreators>Maria Gabriella</StyleCreators>
                <StyleCreators>Shirley Calmon</StyleCreators>
            </FooterList>
        </FooterContainer>
    )
}

export default Footer