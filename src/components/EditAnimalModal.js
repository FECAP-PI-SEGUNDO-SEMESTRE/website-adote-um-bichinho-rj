import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import styled from 'styled-components'

Modal.setAppElement('#root')

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const ModalHeader = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`
const TextArea = styled.textarea`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
`
const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background: #394c73;
    }
`
const CancelButton = styled(Button)`
    background: #ccc;
    &:hover{
        background: #999;
    }
`
const CharacterCount = styled.div`
    text-align: right;
    margin-bottom: 10px;
    color: #666;
`

function EditAnimalModal({ isOpen, onRequestClose, animal, setRefresh, setEditAnimal }) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState(null)
    const MAX_DESC_LENGTH = 500;

    useEffect(() => {
        if (animal) {
            setNome(animal.nome)
            setDescricao(animal.descricao)
        }
    }, [animal])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        if (nome) formData.append('nome', nome)
        if (descricao) formData.append('descricao', descricao)
        if (imagem) formData.append('imagem', imagem)

        try {
            setRefresh((prev) => !prev)
            setEditAnimal(null)
            onRequestClose()
        } catch (error) {
            console.error('Erro ao atualizar os dados', error)
        }
    }

    const handleImageChange = (event) => {
        setImagem(event.target.files[0])
    }

    const handleDescricaoChange = (e) => {
        const descricao = e.target.value
        if (descricao.length <= MAX_DESC_LENGTH) {
            setDescricao(descricao)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Animal"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    padding: '0',
                    overflow: 'visible',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <ModalContent>
                <ModalHeader>Editar Animal</ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do Animal"
                    />
                    <TextArea
                        value={descricao}
                        onChange={handleDescricaoChange}
                        placeholder="Descrição do Animal"
                        rows="4"
                    />
                    <CharacterCount>
                        {MAX_DESC_LENGTH - descricao.length} caracteres restantes
                    </CharacterCount>
                    <Input
                        type="file"
                        onChange={handleImageChange}
                    />
                    <Button type="submit">Atualizar</Button>
                    <CancelButton type="button" onClick={onRequestClose}>Cancelar</CancelButton>
                </Form>
            </ModalContent>
        </Modal>
    )
}

export default EditAnimalModal
