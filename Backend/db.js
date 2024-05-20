// Rota para lidar com o envio do formulário de contato
app.post('/contato', async (req, res) => {
    try {
      const { nome, email, mensagem } = req.body;
  
      // Conectar ao banco de dados MySQL usando as credenciais do arquivo .env
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      });
  
      // Executar uma consulta para inserir os dados do formulário no banco de dados
      await connection.execute('INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)', [nome, email, mensagem]);
  
      // Fechar a conexão com o banco de dados
      await connection.end();
  
      res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      res.status(500).send('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
    }
  });