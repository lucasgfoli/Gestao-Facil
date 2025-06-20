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
     
    res.status(200).json(resultados);
  });
});

// Rota POST para cadastrar um novo produto
router.post('/cadastrar', (req, res) => {
  const {
    id_fornecedor,
    nome,
    categoria,
    preco,
    quantidade,
    data_validade,
    nome_fornecedor,
    imagem
  } = req.body;

  if (!nome || !categoria || !preco || !quantidade || !data_validade || !nome_fornecedor) {
    return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
  }

  const query = `
    INSERT INTO produto (
      id_fornecedor,
      nome,
      categoria,
      preco,
      quantidade,
      data_validade,
      nome_fornecedor,
      imagem
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const valores = [
    id_fornecedor || null,
    nome,
    categoria,
    preco,
    quantidade,
    data_validade,
    nome_fornecedor,
    imagem || null
  ];

  conexao.query(query, valores, (erro, resultado) => {
    if (erro) {
      console.error('Erro ao cadastrar produto:', erro);
      return res.status(500).json({ erro: 'Erro ao cadastrar produto.' });
    }

    res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!', id: resultado.insertId });
  });
});

// Rota PUT para atualizar um produto existente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {
    nome,
    categoria,
    preco,
    quantidade,
    data_validade,
    nome_fornecedor,
    imagem
  } = req.body;

  const query = `
    UPDATE produto SET 
      nome = ?,
      categoria = ?,
      preco = ?,
      quantidade = ?,
      data_validade = ?,
      nome_fornecedor = ?,
      imagem = ?
    WHERE id_produto = ?
  `;

  const valores = [
    nome,
    categoria,
    preco,
    quantidade,
    data_validade,
    nome_fornecedor,
    imagem,
    id
  ];

  conexao.query(query, valores, (erro, resultado) => {
    if (erro) {
      console.error('Erro ao atualizar produto:', erro);
      return res.status(500).json({ erro: 'Erro ao atualizar produto.' });
    }

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Produto atualizado com sucesso.' });
  });
});

// Rota GET para buscar um produto pelo ID
router.get('/:id', (req, res) => {
  const idProduto = req.params.id;
  const query = 'SELECT * FROM produto WHERE id_produto = ?';

  conexao.query(query, [idProduto], (erro, resultados) => {
    if (erro) {
      console.error('Erro ao buscar produto por ID:', erro);
      return res.status(500).json({ erro: 'Erro ao buscar produto' });
    }

    if (resultados.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    res.status(200).json(resultados[0]); // envia só o produto
  });
});


// Atualizar apenas a quantidade de um produto (venda)
router.put('/:id/quantidade', (req, res) => {
  const idProduto = req.params.id;
  const { novaQuantidade } = req.body;

  if (novaQuantidade === undefined) {
    return res.status(400).json({ erro: 'Nova quantidade não informada' });
  }

  const query = 'UPDATE produto SET quantidade = ? WHERE id_produto = ?';

  conexao.query(query, [novaQuantidade, idProduto], (erro, resultado) => {
    if (erro) {
      console.error('Erro ao atualizar quantidade:', erro);
      return res.status(500).json({ erro: 'Erro ao atualizar quantidade' });
    }

    res.status(200).json({ mensagem: 'Quantidade atualizada com sucesso!' });
  });
});


export default router;

