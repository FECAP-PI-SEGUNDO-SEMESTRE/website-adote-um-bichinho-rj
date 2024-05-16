import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Adote from './pages/Adote'
import Contato from './pages/Contato'
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`


function App(){
  return(
    <Container>
      <Router>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/adote" element={<Adote />}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App