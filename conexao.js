// Importar módulo express
import express from 'express'
import dotenv from 'dotenv'

// Importar módulo mysql
import mysql from 'mysql2'

import path from 'path'
import { fileURLToPath } from 'url'

// Importar as rotas
import produtosRouter from './routes/produtos.js'
import usuariosRouter from './routes/usuarios.js';

// Importar cors
import cors from 'cors'

// Criar app
const app = express();

// Carregar variáveis do arquivo .env
dotenv.config();


app.use(cors())
app.use(express.json())

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
app.use('/usuarios', usuariosRouter);


// Servidor
app.listen(8080, () => {
    console.log('Server rodando na porta 8080')
});

export default conexao;