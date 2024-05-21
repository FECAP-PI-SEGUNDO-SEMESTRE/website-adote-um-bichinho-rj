const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

app.use(cors({
    origin: 'http://localhost:3000' // Permite requisições do frontend
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com o envio do formulário
app.post('/submit-form', async (req, res) => {
    try {
        const { nome, email, assunto, mensagem } = req.body;
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });

        const query = 'INSERT INTO FormSubmissions (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)';
        await connection.execute(query, [nome, email, assunto, mensagem]);

        await connection.end();
        res.status(200).send('Dados do formulário enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar dados do formulário:', error);
        res.status(500).send('Erro ao enviar dados do formulário. Por favor, tente novamente mais tarde.');
    }
});

app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});