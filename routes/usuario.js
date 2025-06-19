import express from 'express';
import conexao from '../conexao.js';

const router = express.Router();

// Rota para cadastro de usuário
router.post('/cadastrar', (req, res) => {
    const { nome, telefone, cpf, dataNascimento, email, senha } = req.body;

    if (!nome || !telefone || !cpf || !dataNascimento || !email || !senha) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos!' });
    }

    const sql = `
        INSERT INTO usuarios (nome, telefone, cpf, dataNascimento, email, senha)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valores = [nome, telefone, cpf, dataNascimento, email, senha];

    conexao.query(sql, valores, (erro, resultado) => {
        if (erro) {
            console.error('Erro ao cadastrar usuário:', erro);
            return res.status(500).json({ mensagem: 'Erro no servidor ao cadastrar usuário.' });
        }
        console.log ('usuario cadastrado!' , valores)
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    });
});

export default router;
