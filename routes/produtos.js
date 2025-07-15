import express from 'express';
import conexao from '../conexao.js'; 

const router = express.Router();

// Rota GET para listar todos os produtos
router.get('/', async (req, res) => {
  const query = 'SELECT * FROM produto';

  try {
    const resultado = await conexao.query(query);
    res.status(200).json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});

// Rota POST para cadastrar um novo produto
router.post('/cadastrar', async (req, res) => {
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
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id_produto
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

  try {
    const resultado = await conexao.query(query, valores);
    res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!', id: resultado.rows[0].id_produto });
  } catch (erro) {
    console.error('Erro ao cadastrar produto:', erro);
    res.status(500).json({ erro: 'Erro ao cadastrar produto.' });
  }
});

// Rota PUT para atualizar um produto existente
router.put('/:id', async (req, res) => {
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
      nome = $1,
      categoria = $2,
      preco = $3,
      quantidade = $4,
      data_validade = $5,
      nome_fornecedor = $6,
      imagem = $7
    WHERE id_produto = $8
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

  try {
    const resultado = await conexao.query(query, valores);

    if (resultado.rowCount === 0) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Produto atualizado com sucesso.' });
  } catch (erro) {
    console.error('Erro ao atualizar produto:', erro);
    res.status(500).json({ erro: 'Erro ao atualizar produto.' });
  }
});

// Rota GET para buscar um produto pelo ID
router.get('/:id', async (req, res) => {
  const idProduto = req.params.id;
  const query = 'SELECT * FROM produto WHERE id_produto = $1';

  try {
    const resultado = await conexao.query(query, [idProduto]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (erro) {
    console.error('Erro ao buscar produto por ID:', erro);
    res.status(500).json({ erro: 'Erro ao buscar produto' });
  }
});

// Rota DELETE para remover um produto
router.delete('/:id', async (req, res) => {
  const idProduto = req.params.id;

  const query = 'DELETE FROM produto WHERE id_produto = $1';

  try {
    const resultado = await conexao.query(query, [idProduto]);

    res.status(200).json({ mensagem: 'Produto deletado com sucesso.' });
  } catch (erro) {
    console.error('Erro ao deletar produto:', erro);
    res.status(500).json({ erro: 'Erro ao deletar produto.' });
  }
});

export default router;