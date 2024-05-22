

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditAnimalModal from '../components/EditAnimalModal'
import {
    ListContainer,
    AnimalCard,
    AnimalImage,
    AnimalInfo,
    AnimalNome,
    AnimalDescricao,
    Actions,
    ActionButton
} from '../components/AnimalListStyle'

function AnimalList({ refresh, setRefresh }) {
    const [animais, setAnimais] = useState([])
    const [editAnimal, setEditAnimal] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchAnimais()
    }, [refresh])

    const fetchAnimais = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/animais')
            setAnimais(response.data)
        } catch (error) {
            console.error('Erro ao buscar animais', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/animais/${id}`)
            fetchAnimais()
        } catch (error) {
            console.error('Erro ao deletar o animal', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/animais/${id}`)
            setEditAnimal(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar o animal para edição', error)
        }
    }

    return (
        <ListContainer>
            {animais.map((animal) => (
                <AnimalCard key={animal.id}>
                    <AnimalImage src={`http://localhost:5000/uploads/${animal.imagem}`} alt={animal.nome} style={{ width: '100px' }} />
                    <AnimalInfo>
                        <AnimalNome>{animal.nome}</AnimalNome>
                        <AnimalDescricao>{animal.descricao}</AnimalDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(animal.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(animal.id)}>Editar</ActionButton>
                        </Actions>
                    </AnimalInfo>
                </AnimalCard>
            ))}
            {editAnimal && (
                <EditAnimalModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    animal={editAnimal}
                    setRefresh={setRefresh}
                    setEditAnimal={setEditAnimal}
                />
            )}
        </ListContainer>
    )
}

export default AnimalList
