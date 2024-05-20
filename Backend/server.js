const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });

    await connection.execute('INSERT INTO form (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)', [nome, email, assunto, mensagem]);

    await connection.end();

    res.status(200).send('Dados do formulário enviados com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar dados do formulário:', error);
    res.status(500).send('Erro ao enviar dados do formulário. Por favor, tente novamente mais tarde.');
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});