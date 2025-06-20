// routes/produtos.js
import express from 'express';
import conexao from '../conexao.js'; 

const router = express.Router();

// Rota GET para listar todos os produtos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM produto';

  conexao.query(query, (erro, resultados) => {
    if (erro) {
      console.error('Erro ao buscar produtos:', erro);
      return res.status(500).json({ erro: 'Erro ao buscar produtos' });
    }

     console.log('Produtos buscados:', resultados);
     
    res.status(200).json(resultados);
  });
});

export default router;

