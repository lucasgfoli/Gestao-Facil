// Importar módulo express
import express from 'express'

// Importar módulo mysql
import mysql from 'mysql2'

// App
import app from express

// Carregar variáveis do arquivo .env
dotenv.config();

// Criar app
const app = express();

// Conexão com o banco de dados usando variáveis do .env
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Teste de conexão
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!')
});


// Rota Hello World
app.get('/', function(req, res){
    res.write('Uilizando o Nodemon');
    res.end();
});

// Servidor
app.listen(8080);
