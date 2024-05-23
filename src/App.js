import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Adote from './pages/Adote'
import Contato from './pages/Contato'
import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle"
import Sobre from "./pages/Sobre"

export const Container = styled.div`
  background-color: #D5F0FF;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 700px){
    margin: 0;
    width: 100%;
  }
`


function App(){
  return(
    <Container>
      <GlobalStyles/>
      <Router>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/adote" element={<Adote />}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App