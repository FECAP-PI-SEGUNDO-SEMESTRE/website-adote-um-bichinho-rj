import React from "react"
import styled from "styled-components"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Titulo from "../components/TituloHome"
import MainImg from "../assets/img-5.jpg"
import IMG1 from "../assets/img-2.jpg"
import IMG2 from "../assets/img-3.jpg"
import IMG3 from "../assets/img-4.jpg"
import IMG4 from "../assets/apadrinhamento.jpg"
import IMG5 from "../assets/doe.jpg"
import IMG6 from "../assets/bazar.jpg"
import IMG7 from "../assets/denuncie.jpg"
import IMG8 from "../assets/Vakinha.jpg"

const MainImage = styled.img`
    border-radius: 26px;
    justify-content: center;
    width: 70%;
    height: 36em;
    object-fit: cover;
    margin-bottom: 5%;
    margin-top: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const MainContainer = styled.main`
    display: flex;
    justify-content: center;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const InfoBlock = styled.div`
    /* background-color: #fff; */
    border-radius: 5%;
    margin: 0 5% 0 5%;
    width:26em;
`
const InfoBlock2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 2% 5% 2%;
`
const InfoBlock3 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1000px){
        flex-direction:column;
    }

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
    width: 22em;
    height: 19em;
    object-fit: cover;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover{
        border: 5px solid #ccc;
    }
`
const InfoImage2 = styled.img`
    width: 16em; 
    height: 16em; 
    object-fit: cover;
    border-radius: 5%;
    margin: 0 5% 0 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 700px){
        margin: 5%;
        width: 20em;
        height: 20em;
    }
`
const InfoImage3 = styled.img`
    width: 30em; 
    height: 33em; 
    object-fit: cover;
    border-radius: 5%;
    margin: 5em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 1000px){
        margin: 5%;
    }
`
const Text = styled.p`
    font-size: 1.01em;
    text-align: start;
    margin-left: 10%;
    margin-right: 10%;
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
    font-size: 90%;
    padding: 8px;
    margin: 0 auto;
    &:hover{
        color:#508E9D;
        background-color: #fff;
        
    }
`
const VakinhaContainer = styled.div`
    background-image: url(${IMG8});
    width: 95%;
    height: 450px;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
    margin: 0 auto;
    margin-top: 5%;
`;

const VakinhaButton = styled.button`
    cursor: pointer; 
    padding: 3px 10px;
    border-radius: 5px;
    border:none;
    background-color: #F7B0D2;
    color: #ffffff;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 125%;
    padding: 8px;
    margin: 50px;
    &:hover{
        color: #F7B0D2;
        background-color: #fff;
    }
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const CarouselImg = styled.img`
    width: 30em;
    height: 30em;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 2%;
    border-radius: 5%;
    display: flex;
    justify-content: center;
`

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;

`
function Home() {
    return (
        <div>
            <Header />
            <Titulo />
            <MainContainer>
                <MainImage src={MainImg} alt="" />
            </MainContainer>

            {/* SOBRE A ONG + COMO AJUDAR?*/}
            <InfoContainer>
                <InfoBlock>
                    <Subtitle id="sobre">Sobre a ONG</Subtitle>
                    <ImageContainer><InfoImage src={IMG1} alt="" /></ImageContainer>
                    <Text>Nosso propósito é <strong>resgatar</strong> e <strong>cuidar </strong>
                        dos animais que enfrentam situações de rua, abandono e crueldade, muitas vezes
                        lutando contra a fome, ferimentos e doenças. Consideramos nossa missão cumprida
                        quando conseguimos encontrar lares amorosos e responsáveis para cada um dos
                        animais que resgatamos, oferecendo-lhes a chance de uma vida digna e cheia de muito amor!</Text>
                </InfoBlock>
                <InfoBlock>
                    <Subtitle>Como Ajudar?</Subtitle>
                    <ImageContainer><InfoImage src={IMG2} alt="" /></ImageContainer>
                    <Text>Existem várias maneiras de fazer a diferença. As <strong>doações </strong>garantem todos os
                        cuidados necessários aos cães. Ao<strong> apadrinhar </strong> um animal,
                        você supre suas necessidades básicas e contribui para seu bem-estar.
                        E através da <strong>adoção</strong>, você se junta a nós na missão de
                        oferecer um lar amoroso para esses animais necessitados.</Text>
                    <Text><strong>Sua ajuda faz toda a diferença!</strong></Text>
                </InfoBlock>
            </InfoContainer>

            {/* ADOTAR, APADRINHAR E DOAR */}

            {/* <InfoContainer>
                <InfoBlock2>
                    <InfoImage2 src={IMG3} alt="" />
                    <a href="../adote"><Button>ADOTAR</Button></a>
                </InfoBlock2>
                <InfoBlock2>
                    <InfoImage2 src={IMG4} alt="" />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0-7gocM3tH51omzkd4cyGkdZuAOToOoFhXZlwsFDCF045w/viewform"><Button>APADRINHAR</Button></a>
                </InfoBlock2>
                <InfoBlock2>
                    <InfoImage2 src={IMG5} alt="" />
                    <a href="https://www.asaas.com/c/242439642795?fbclid=PAAaa5qq3hUyQtm-PgCXUljSupl0UqtKJkoRKbekLGJWJNjKLReiyDRWfGC7I"><Button>DOAR</Button></a>
                </InfoBlock2>
            </InfoContainer> */}
            
            {/* Carrossel */}
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1200}
                keyBoardControl={true}
                customTransition="all 1.5s"
                transitionDuration={1200}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <a href="../adote"><CarouselContainer><CarouselImg src={IMG3} alt=""/><Button>ADOTAR</Button></CarouselContainer></a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0-7gocM3tH51omzkd4cyGkdZuAOToOoFhXZlwsFDCF045w/viewform"><CarouselContainer><CarouselImg src={IMG4} alt=""/><Button>APADRINHAR</Button></CarouselContainer></a>
                <a href="https://www.asaas.com/c/242439642795?fbclid=PAAaa5qq3hUyQtm-PgCXUljSupl0UqtKJkoRKbekLGJWJNjKLReiyDRWfGC7I"><CarouselContainer><CarouselImg src={IMG5} alt=""/><Button>DOAR</Button></CarouselContainer></a>
                
            </Carousel> 

            {/* BAZAR E DENÚNCIA */}
            <InfoContainer>
                <InfoBlock3>
                    <InfoImage3 src={IMG6} alt="Informações sobre o Bazar Beneficente" />
                    <InfoImage3 src={IMG7} alt="Informações sobre denúncia" />
                </InfoBlock3>
            </InfoContainer>

            {/* VAKINHA */}
            <VakinhaContainer>
                {/* <div><VakinhaImage src={IMG8} alt=""/></div> */}
                <div><a href="//www.vakinha.com.br/vaquinha/canis-adote-um-bichinho-rj?"><VakinhaButton>AJUDE-NOS</VakinhaButton></a></div>
            </VakinhaContainer>

            
            <Footer />
        </div>
    )
}

export default Home;
