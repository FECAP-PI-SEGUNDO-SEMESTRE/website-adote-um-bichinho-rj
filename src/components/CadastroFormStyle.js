import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 20px;
  max-width: 1000px;
  margin: auto;
`;

export const FormContainer = styled.div`
  flex: 3;
  text-align: left;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  flex: 2;
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 80%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 80%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CharacterCount = styled.div`
  font-size: 12px;
  color: #555;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 10px;
`;

export const FileInput = styled.input`
  display: block;
  width: 80%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007BFF;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 0 20px;
`;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: justify;
`;

const Title = styled.h2`
  text-align: left;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`;

function BioContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`http://projetorg01.mysql.database.azure.com/api/personagens/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Erro ao buscar personagem', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!character) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <Banner />
      <Container>
        <Content>
          <Image src={`http://projetorg01.mysql.database.azure.com/uploads/${character.imagem}`} alt={character.nome} />
          <TextContainer>
            <Title>{character.nome}</Title>
            <Text>{character.texto}</Text>
            <Button onClick={handleBack}>Voltar</Button>
          </TextContainer>
        </Content>
      </Container>
      <Footer />
    </div>
  );
}

export default BioContent;