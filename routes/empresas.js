import express from 'express'
import conexao from '../conexao.js'

const router = express.Router()

// Rota para cadastro de empresa
router.post('/', async (req, res) => {
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
    ) VALUES ($1, $2, $3, $4, $5)
  `

  const valores = [razao_social, cnpj, email, telefone, endereco]

  try {
    await conexao.query(sql, valores)
    console.log('Empresa cadastrada com sucesso!', valores)
    res.status(201).json({ message: 'Empresa cadastrada com sucesso!' })
  } catch (erro) {
    console.error('Erro ao cadastrar empresa:', erro)
    res.status(500).json({ message: 'Erro no servidor ao cadastrar empresa.' })
  }
})

export default router
