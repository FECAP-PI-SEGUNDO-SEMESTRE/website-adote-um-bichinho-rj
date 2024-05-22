const db = require('../db')

exports.createAnimal = async (req, res) => {
    const { nome, descricao } = req.body
    const imagem = req.file.filename // path
    try {
        const [result] = await db.query('INSERT INTO animais (nome, descricao, imagem) VALUES (?, ?, ?)', [nome, descricao, imagem])
        res.status(201).send(`Animal criado com o ID: ${result.insertId}`)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getAllAnimals = async (req, res) => {
    try {
        const [animais] = await db.query('SELECT * FROM animais')
        res.status(200).json(animais)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getAnimalById = async (req, res) => {
    const id = req.params.id
    try {
        const [animal] = await db.query('SELECT * FROM animais WHERE id = ?', [id])
        if (animal.length > 0) {
            res.status(200).json(animal[0])
        } else {
            res.status(404).send('Animal não encontrado')
        }
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.updateAnimal = async (req, res) => {
    const id = req.params.id
    const { nome, descricao } = req.body
    const imagem = req.file ? req.file.filename : null
    try {
        const fields = []
        const values = []
        if (nome) {
            fields.push('nome = ?')
            values.push(nome)
        }
        if (descricao) {
            fields.push('descricao = ?')
            values.push(descricao)
        }
        if (imagem) {
            fields.push('imagem = ?')
            values.push(imagem)
        }
        if (fields.length === 0) {
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE animais SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if (result.affectedRows > 0) {
            res.status(200).send('Animal atualizado com sucesso!')
        } else {
            res.status(404).send('Não foi possível atualizar o animal')
        }
    } catch (err) {
        console.error('Erro ao atualizar o animal', err)
        res.status(500).send(err.message)
    }
}

exports.deleteAnimal = async (req, res) => {
    const id = req.params.id
    try {
        const [result] = await db.query('DELETE FROM animais WHERE id = ?', [id])
        if (result.affectedRows > 0) {
            res.status(200).send('Animal deletado com sucesso')
        } else {
            res.status(404).send('Animal não encontrado')
        }
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

