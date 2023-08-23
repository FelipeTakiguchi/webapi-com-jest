const express = require('express');
const router = express.Router();
const ProdutoController = require('../controller/ProdutoController');

router
    .get('/', ProdutoController.GetAll)
    .get('/:id', ProdutoController.GetById)
    .post('/', ProdutoController.Post)
    .patch('/:id', ProdutoController.Update)
    .delete('/:id', ProdutoController.Delete)

module.exports = router