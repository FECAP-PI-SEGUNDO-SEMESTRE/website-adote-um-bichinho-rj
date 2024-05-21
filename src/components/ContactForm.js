import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContactContainer = styled.div`
    display: flex;
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
`

const FormContainer = styled.div`
    text-align: center;
    flex: 3;
    max-width: 1000px;
    margin: 0 auto;

`
const Form = styled.form`
`
// const TextArea = styled.textarea`
// `

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
`
const SearchInput = styled(Input)`
    width: 50%;
    margin: 0 auto 20px auto;
`

const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    border:none;
    background-color: #508E9D;
    color: #ffffff;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 90%;
    padding: 8px;
    &:hover{
        color:#508E9D;
        background-color: #fff;
    }
`

const ContactForm = () => {
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/submit-form', formData);
        alert('Dados  enviados com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar dados do formulário:', error);
        alert('Erro ao enviar dados do formulário. Por favor, tente novamente mais tarde.');
      }
    };

    return(
      <ContactContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <SearchInput
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <SearchInput
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <SearchInput
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
            />
            <SearchInput
              name="mensagem"
              placeholder="Mensagem"
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </FormContainer>
      </ContactContainer>


            // <ContactContainer>
            //     <FormContainer>
            //         <Form>
            //             <SearchInput type="text" placeholder="Nome" />
            //             <SearchInput type="email" placeholder="E-mail" />
            //             <SearchInput type="text" placeholder= "Assunto" />
            //             <SearchInput type="textarea" placeholder= "Mensagem" />
            //             <Button type="submit">Enviar</Button>
            //         </Form>    
                    
            //     </FormContainer>
            // </ContactContainer>
    )
}

export default ContactForm
