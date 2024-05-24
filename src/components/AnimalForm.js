

import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Defina os estilos dos componentes usando styled-components
const FormContainer = styled.form`
    max-width: 450px;
    margin: 0 auto;
    padding: 20px;
    background-color: #a8d7e5;
    border-radius: 10px;
`;

const InputField = styled.input`
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
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
`;

const CharacterCount = styled.div`
    color: #666;
    font-size: 12px;
`;

// Componente principal AnimalForm
function AnimalForm({ ais }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(Date.now());
    const MAX_DESC_LENGTH = 500;
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('texto', descricao);
        formData.append('imagem', imagem);

        try {
            //await axios.post('http://projetorg01.mysql.database.azure.com/api/animais', formData, {
                await axios.post('http://projetorg01.mysql.database.azure.com/api/animais', formData, {    
            headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setNome('');
            setDescricao('');
            setImagem(null);
            setFileInputKey(Date.now());
            //fetchAnimais();
        } catch (error) {
            console.error('Erro ao enviar o animal', error);
        }
    };

    const handleImageChange = (event) => {
        setImagem(event.target.files[0]);
    };

    const handleDescricaoChange = (e) => {
        const texto = e.target.value;
        if (texto.length <= MAX_DESC_LENGTH) {
            setDescricao(texto);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit} ref={formRef}>
            <InputField
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do Animal"
                required
            />
            <br /><br />
            <TextArea
                value={descricao}
                onChange={handleDescricaoChange}
                placeholder="Descrição do Animal"
                required
            />
            <CharacterCount>{MAX_DESC_LENGTH - descricao.length} caracteres restantes</CharacterCount>
            <br /><br />
            <input
                type="file"
                key={fileInputKey}
                onChange={handleImageChange}
                required
            />
            <br /><br />
            <ButtonContainer><Button type="submit">Cadastrar</Button></ButtonContainer>
            <br /><br />
            <hr />
            <br /><br />
        </FormContainer>
    );
}

export default AnimalForm;
