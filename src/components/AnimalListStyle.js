import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const AnimalCard = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AnimalImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

export const AnimalInfo = styled.div`
  flex: 1;
`;

export const AnimalNome = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
`;

export const AnimalDescricao = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: #666;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 0; 
  margin-bottom: 20px;
`;
