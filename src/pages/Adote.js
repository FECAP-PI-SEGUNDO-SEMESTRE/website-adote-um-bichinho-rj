import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Titulo from '../components/TituloAdote'
import ImagemAbrigo from '../assets/Abrigo.png'

const Subtitle = styled.h1`
    color: #508E9D;
    text-align: center;
    font-size: 35px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
`
const InfoContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 5% 10% 5% 10%;
`
const Text = styled.p`
    margin-right: 20%;
    text-align: justify;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 430px;
    height: 260px;
    object-fit: cover;
    border-radius: 20px;
    margin: 5%;
`

const Button = styled.button`
    cursor: pointer; 
    padding: 3px 10px;
    border-radius: 5px;
    border:none;
    background-color: #508E9D;
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 125%;
    padding: 8px;
    margin-top: 20px;
    &:hover{
        color:#508E9D;
        background-color: #fff;
    }
`
function Adote(){
    return(
        <div>
            <Header/>
            <Titulo/>
            <InfoContainer>
                <div>
                    <Subtitle>Como Fazer uma Adoção?</Subtitle>
                    <Text>Nosso propósito é <strong>resgatar</strong> e <strong>cuidar</strong>  dos animais que enfrentam situações de rua, abandono e crueldade, muitas vezes lutando contra a fome, ferimentos e doenças. Consideramos nossa missão cumprida quando conseguimos encontrar lares amorosos e responsáveis para cada um dos animais que resgatamos, oferecendo-lhes a chance de uma vida digna e cheia de muito amor! </Text>
                </div>

                <div>
                    <ImageContainer><Image src={ImagemAbrigo} alt=""/></ImageContainer>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNAmREZXkeGckyDZsXmt4nZuf95HfvQnqGERcpFZMf8czJ4A/viewform"><Button>FORMULÁRIO DE ADOÇÃO</Button></a>
                </div>
            </InfoContainer>
            <Footer/>
        </div>
    );
}
export default Adote