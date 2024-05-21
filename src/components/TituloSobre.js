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
`

export function Titulo(){
    return(
        <TitleContainer><h1>QUEM SOMOS</h1></TitleContainer>
    )
}


