// Importar módulos
import express from 'express'
import dotenv from 'dotenv'
import pg from 'pg' 

// Importar as rotas
import produtosRouter from './routes/produtos.js'
import usuariosRouter from './routes/usuarios.js'
import empresasRouter from './routes/empresas.js'

// Importar cors
import cors from 'cors'

// Carregar variáveis de ambiente
dotenv.config()

// Criar app
const app = express()

app.use(cors())
app.use(express.json())

// Criar conexão com PostgreSQL
const { Pool } = pg
// const pool = pg.Pool

const conexao = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
})

// Testar conexão
conexao.connect((erro, cliente, release) => {
  if (erro) {
    console.error('Erro ao conectar ao banco:', erro.stack)
  } else {
    console.log('Conexão com PostgreSQL (Neon) efetuada com sucesso!')
    release() 
  }
})

// Usar rotas
app.use('/produto', produtosRouter)
app.use('/usuario', usuariosRouter)
app.use('/empresas', empresasRouter)

// Servidor
app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})

export default conexao