import express from 'express';
import conexao from '../conexao.js';

const router = express.Router();

// Rota POST para cadastrar um usuário
router.post('/cadastrar', async (req, res) => {
  const { cnpj_usuario, nome, dataNascimento, telefone, email, senha } = req.body;

  if (!cnpj_usuario || !nome || !dataNascimento || !telefone || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos obrigatórios!' });
  }

  const sql = `
    INSERT INTO usuario (cnpj_usuario, nome, data_nascimento, telefone, email, senha)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  const valores = [cnpj_usuario, nome, dataNascimento, telefone, email, senha];

  try {
    await conexao.query(sql, valores);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao cadastrar usuário:', erro);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
});

export default router;
