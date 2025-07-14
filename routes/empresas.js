import express from 'express'
import conexao from '../conexao.js'

const router = express.Router()

// Rota para cadastro de empresa
router.post('/', async (req, res) => {
  const {
    nome,
    cnpj,
    email,
    telefone,
    endereco,
    estado,
    cep,
    site
  } = req.body

  if (!nome || !cnpj || !email || !telefone || !endereco || !estado || !cep) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios!' })
  }

  const sql = `
    INSERT INTO empresas (
      nome,
      cnpj,
      email,
      telefone,
      endereco,
      estado,
      cep,
      site
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `

  const valores = [nome, cnpj, email, telefone, endereco, estado, cep, site]

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
