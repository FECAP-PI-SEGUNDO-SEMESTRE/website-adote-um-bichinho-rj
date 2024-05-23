import React, {useState} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Titulo from '../components/TituloAdote'
import ImagemAbrigo from '../assets/Abrigo.png'
import AnimalForm from '../components/AnimalForm'
import AnimalList from '../components/AnimalList'


const MainContainer = styled.div`
@media (max-width: 1000px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
const Subtitle = styled.h1`

    color: #508E9D;
    text-align: left;
    font-size: 200%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 

    @media (max-width: 1000px) {
        font-size: 150%; 
    }
`

const Subtitle2 = styled.h1`

    color: #508E9D;
    text-align: center;
    font-size: 200%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 

    @media (max-width: 1000px) {
        font-size: 150%; 
    }
`
const InfoContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 5% 10% 5% 10%;

    @media (max-width: 1000px) {
        flex-direction: column;   
    }
    
`
const Text = styled.p`
    margin-right: 20%;
    text-align: justify;
    color: #444;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 100%;

    @media (max-width: 1000px) {
           margin-right:0;
           text-align:justify;
           
           justify-content: center;
        }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 400px;
    height: 260px;
    object-fit: cover;
    border-radius: 20px;
    margin: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 1000px) {
           width: 100%;
        }
`

const Button = styled.button`
    cursor: pointer; 
    padding: 3px 10px;
    border-radius: 5px;
    border:none;
    background-color: #508E9D;
    color: #ffffff;
    font-family: Verdana, Tahoma, sans-serif;
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
    const [refresh, setRefresh] = useState(false)
    return(
        <div>
            <Header/>
            <Titulo/>
            <InfoContainer>
                <MainContainer>
                    <Subtitle>Como Fazer uma Adoção?</Subtitle>
                    <Text>Nosso propósito é <strong>resgatar</strong> e <strong>cuidar</strong>  dos animais que enfrentam situações de rua, abandono e crueldade, muitas vezes lutando contra a fome, ferimentos e doenças. Consideramos nossa missão cumprida quando conseguimos encontrar lares amorosos e responsáveis para cada um dos animais que resgatamos, oferecendo-lhes a chance de uma vida digna e cheia de muito amor! </Text>
                </MainContainer>

                <FormContainer>
                    <ImageContainer><Image src={ImagemAbrigo} alt=""/></ImageContainer>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNAmREZXkeGckyDZsXmt4nZuf95HfvQnqGERcpFZMf8czJ4A/viewform"><Button>FORMULÁRIO DE ADOÇÃO</Button></a>
                </FormContainer>
            </InfoContainer>

            <Subtitle2>Cadastro de Animais</Subtitle2>
            <AnimalForm setRefresh={setRefresh}/>
            <Subtitle2>Animais Cadastrados</Subtitle2>
            <AnimalList refresh={refresh} setRefresh={setRefresh}/>
            <Footer/>
        </div>
    );
}
export default Adote