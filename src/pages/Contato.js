import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Titulo from '../components/TituloContato'

const FormContainer = styled.div`
display: flex;
justify-content: center;
`

const Input = styled.input`
width: 31.25rem;
height: 3.125rem;
`
const Textarea = styled.textarea`
width: 500px;
`
export const Forms = () => {
    return (
        <div>
            <h1>Fale Conosco</h1>
            <form action="">
                <div>
                    <p>Nome</p>
                    <Input type="text" required />
                </div>
                <div>
                    <p>E-mail</p>
                    <Input type="email" required />
                </div>
                <div>
                    <p>Assunto</p>
                    <Textarea name="Assunto" cols="20" rows="10"></Textarea>
                </div>
                <div>
                    <Input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
};



function Contato(){
    return(
        <div>
            <Header/>
            <Titulo/>
            <div>`rodrigola faz teu nome aqui`</div>
            <FormContainer><Forms/></FormContainer>
            <Footer/>
        </div>
    )
}
export default Contato