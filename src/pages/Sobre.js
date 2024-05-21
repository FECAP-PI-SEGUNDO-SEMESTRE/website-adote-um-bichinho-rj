import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Titulo from "../components/TituloSobre"
import Img from "../assets/criadoras.png"
import Footer from "../components/Footer"

const Container = styled.div`
    background-color: #a8d7e5;
    display:flex;
    margin: 5%;
    border-radius: 2em;
`
const DivImage = styled.div`
    background-color: #a8d7e5;
    width:100%;
    flex:1;
    display: flex;
    justify-content: center;
    margin: 5%;
`
const TextContainer = styled.div`
    flex:1;
    margin:5%;
`
const Subtitle = styled.h1`
    margin-top: 5%;
    margin-bottom: 0;
    color: #508E9D;
    text-align: center;
    font-size: 200%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 

    @media (max-width: 1000px) {
        font-size: 150%; 
    }
`
const P = styled.p`
margin: 5%;
color: #444;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 100%;
`
const Image = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 20px;
    margin: 2%;
    border: 3px solid #508E9D;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

function Sobre() {
    return(
    <div>
        <Header/>
        <Titulo/>
        <Container>
            <DivImage><Image src={Img}/></DivImage>
            <TextContainer>
                <Subtitle>Nossa Jornada</Subtitle>
                <P>Nossa história começou em 2021, quando nós (Ana Paula Lopes, Débora Osório, Giulia Di Sipio e Shirley Calmon) nos encontramos na proteção animal do Rio de Janeiro e resolvemos unir forças para iniciar o Adote Um Bichinho RJ.</P>
                <P>Somos protetoras atuantes e incansáveis com o objetivo de mudar a história dos animais da nossa cidade que são diariamente vítimas de abandonos e maus tratos.</P>
                <P>Percorremos um longo caminho do resgate a adoção e muitas vezes não conseguimos completar esse ciclo e ficamos com muitos animais sob nossa responsabilidade que necessitam de cuidados e tratamentos.</P>       
                <P>Semanalmente resgatamos novos animais em apuros apesar de sempre estarmos no limite.</P>
                <P>A ONG tem em torno de 200 animais resgatados e faz um trabalho intenso, desde o resgate até a adoção, além de promover Campanhas e desenvolver projetos ajudando muitas protetoras e protetores de animais no Rio de Janeiro e adjacências.        
                Todas as nossas atividades são financiadas através de doações.</P>
            </TextContainer>
        </Container>
        <Footer/>
    </div>
    )
}

export default Sobre