const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    nome: String,
    valor: Number,
    categoria: String,
    estoque: Number,
})

module.exports = Produto;