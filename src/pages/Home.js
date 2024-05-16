import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Titulo from "../components/TituloHome"
import MainImg from "../assets/img-5.jpg"
import IMG1 from "../assets/img-2.jpg"
import IMG2 from "../assets/img-3.jpg"
import IMG3 from "../assets/img-4.jpg"
import IMG4 from "../assets/apadrinhamento.jpg"
import IMG5 from "../assets/doe.jpg"

const MainImage = styled.img`
    border-radius: 26px;
    justify-content: center;
    width: 70%;
    height: 600px;
    object-fit: cover;
    margin-bottom: 5%;
    margin-top: 5%;
`
const MainContainer = styled.main`
    display: flex;
    justify-content: center;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`
const InfoBlock = styled.div`
    background-color: #fff;
    border-radius: 5%;
    margin:0 3% 0 3%;
`
const InfoBlock2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% 0 5% 0;
`
const Subtitle = styled.h1`
    color: #508E9D;
    text-align: center;
    font-size: 35px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const InfoImage = styled.img`
    width: 70%;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
    
`
const InfoImage2 = styled.img`
    width: 85%;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    
`
const Text = styled.p`
    font-size: 1.01em;
    text-align: start;
    margin-left: 15%;
    margin-right: 15%;
    font-family: sans-serif;
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

function Home(){
    return(
        <div>
            <Header/>
            <Titulo/>
            <MainContainer><MainImage src={MainImg} alt=""/></MainContainer>

            {/* SOBRE A ONG + COMO AJUDAR?*/}
            <InfoContainer>
                <InfoBlock>
                    <Subtitle>Sobre a ONG</Subtitle>
                    <ImageContainer><InfoImage src={IMG1} alt=""/></ImageContainer>
                    <Text>Nosso propósito é <strong>resgatar</strong> e <strong>cuidar </strong>
                    dos animais que enfrentam situações de rua, abandono e crueldade, muitas vezes
                    lutando contra a fome, ferimentos e doenças. Consideramos nossa missão cumprida
                    quando conseguimos encontrar lares amorosos e responsáveis para cada um dos 
                    animais que resgatamos, oferecendo-lhes a chance de uma vida digna e cheia de muito amor!</Text>
                </InfoBlock>
                <InfoBlock>
                    <Subtitle>Como Ajudar?</Subtitle>
                    <ImageContainer><InfoImage src={IMG2} alt=""/></ImageContainer>
                    <Text>Existem várias maneiras de fazer a diferença. As <strong>doações </strong>garantem todos os 
                    cuidados necessários aos cães. Ao<strong> apadrinhar </strong> um animal,
                    você supre suas necessidades básicas e contribui para seu bem-estar. 
                    E através da <strong>adoção</strong>, você se junta a nós na missão de
                    oferecer um lar amoroso para esses animais necessitados.</Text>
                    <Text><strong>Sua ajuda faz toda a diferença!</strong></Text>
                </InfoBlock>
            </InfoContainer>

            {/* ADOTAR, APADRINHAR E DOAR */}
            <ButtonsContainer>
                <InfoBlock2>
                    <InfoImage2 src={IMG3} alt=""/>
                    <a href="../adote"><Button>ADOTAR</Button></a>
                </InfoBlock2>
                <InfoBlock2>
                    <InfoImage2 src={IMG4} alt=""/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0-7gocM3tH51omzkd4cyGkdZuAOToOoFhXZlwsFDCF045w/viewform"><Button> APADRINHAR</Button></a>
                </InfoBlock2>
                <InfoBlock2>
                    <InfoImage2 src={IMG5} alt=""/>
                    <a href="https://www.asaas.com/c/242439642795?fbclid=PAAaa5qq3hUyQtm-PgCXUljSupl0UqtKJkoRKbekLGJWJNjKLReiyDRWfGC7I"><Button>DOAR</Button></a>
                </InfoBlock2>
            </ButtonsContainer>   

            <Footer/>
        </div>
    )
}

export default Home