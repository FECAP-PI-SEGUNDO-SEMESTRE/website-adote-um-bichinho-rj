import React from "react"
import styled from "styled-components"

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    font-size: 200%;
    font-weight: bold;
    background: linear-gradient(to left, #F7B0D2, #508E9D);
    color: #edfbff;

    @media (max-width: 1000px){
        font-size: 125%;
    }
`
function Titulo(){
    return(
        <TitleContainer><h1>ADOTE UM BICHINHO RJ</h1></TitleContainer>
    )
}

export default Titulo