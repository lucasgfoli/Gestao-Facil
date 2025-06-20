import express from 'express'
import conexao from '../conexao.js'

const router = express.Router()

// Rota para cadastro de empresa
router.post('/', (req, res) => {
  const {
    razao_social,
    cnpj,
    email,
    telefone,
    endereco
  } = req.body

  // Verificação básica dos campos obrigatórios
  if (!razao_social || !cnpj || !email || !telefone || !endereco) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios!' })
  }

  const sql = `
    INSERT INTO empresas (
      razao_social,
      cnpj_empresa,
      email_empresa,
      telefone_empresa,
      endereco
    ) VALUES (?, ?, ?, ?, ?)
  `

  const valores = [razao_social, cnpj, email, telefone, endereco]

  conexao.query(sql, valores, (erro, resultado) => {
    if (erro) {
      console.error('Erro ao cadastrar empresa:', erro)
      return res.status(500).json({ message: 'Erro no servidor ao cadastrar empresa.' })
    }

    console.log('Empresa cadastrada com sucesso!', valores)
    res.status(201).json({ message: 'Empresa cadastrada com sucesso!' })
  })
})

export default router
