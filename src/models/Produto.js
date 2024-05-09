const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    descricao: String,
    categoria: {
        type: String,
        enum: ['eletronicos', 'livros', 'banho', 'cozinha']
    },
    disponivel: Boolean
},
{
    collection: 'produtos'
})
const Produto = mongoose.model('Produto', produtoSchema)
module.exports = Produto