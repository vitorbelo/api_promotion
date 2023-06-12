const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

// Configurações da conexão com o banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_api_promotion'
};

// Criar uma nova conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Conectar ao banco de dados
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conectado ao banco de dados com sucesso!');
  }
});

// Rota para adicionar os preços dos produtos rastreados
app.post('/tracked_products', (req, res) => {
  const { prices } = req.body;

  // Inserir cada preço na tabela
  const sql = 'INSERT INTO tracked_products (product_price) VALUES (?)';
  prices.forEach(price => {
    connection.query(sql, [price], (error, result) => {
      if (error) {
        console.error('Erro ao inserir o preço do produto:', error);
      }
    });
  });

  res.status(200).send('Preços dos produtos rastreados foram salvos no banco de dados.');
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});