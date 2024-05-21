const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Rota para lidar com o envio do formulário de contato
router.post('/submit-form', async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    // Conectar ao banco de dados MySQL usando as credenciais do arquivo .env
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });

    // Executar uma consulta para inserir os dados do formulário no banco de dados
    await connection.execute('INSERT INTO FormSubmissions (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)', [nome, email, assunto, mensagem]);

    // Fechar a conexão com o banco de dados
    await connection.end();

    res.status(200).send('Dados do formulário enviados com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar dados do formulário:', error);
    res.status(500).send('Erro ao enviar dados do formulário. Por favor, tente novamente mais tarde.');
  }
});

module.exports = router;