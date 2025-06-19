// Importar módulo express
import express from 'express'

import dotenv from 'dotenv'
// Importar módulo mysql
import mysql from 'mysql2'

// Importar produtos da rota
import produtosRouter from './routes/produtos.js'

// Importar cors
import cors from 'cors'


// Carregar variáveis do arquivo .env
dotenv.config();

// Criar app
const app = express();

app.use(cors());

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

app.use('/produtos', produtosRouter);
app.use('/empresas', empresasRouter); // <- rota de cadastro de empresa

// Servidor
app.listen(8080, () => {
    console.log('Server rodando na porta 8080')
});

export default conexao;