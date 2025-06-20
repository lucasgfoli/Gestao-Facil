import express from 'express';
import conexao from '../conexao.js';

const router = express.Router();

// Rota POST para cadastrar um usuário
router.post('/cadastrar', (req, res) => {
  const { cnpj_usuario, nome, dataNascimento, telefone, email, senha } = req.body;

  if (!cnpj_usuario || !nome || !dataNascimento || !telefone || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos obrigatórios!' });
  }

  const sql = `
    INSERT INTO usuario (cnpj_usuario, nome, data_nascimento, telefone, email, senha)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  conexao.query(sql, [cnpj_usuario, nome, dataNascimento, telefone, email, senha], (erro, resultado) => {
    if (erro) {
      console.error('Erro ao cadastrar usuário:', erro);
      return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
    }

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  });
});

export default router;
