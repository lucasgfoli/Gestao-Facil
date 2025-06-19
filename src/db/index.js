const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'http://gestao-facil-bd.mysql.database.azure.com',
  user: 'adminGestaoFacil',
  password: 'sua_senha_aqui',
  database: 'gestao_facil'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('Conexão com banco de dados MySQL estabelecida!');
  }
});

module.exports = conexao;
