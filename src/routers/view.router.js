const express = require('express')
const router = express.Router()
const Produto = require('../models/Produto')

router.get('/',  async (req, res)=> {
    try{
        const produtos = await Produto.find()
        console.log(produtos)
        res.render('index', {produtos})
    }
    catch(error){
        console.error('error ao buscar produtos', error)
        res.status(500).send('error ao buscar produtos')
    }
})

router.post('/produtos', async(req, res) => {
    try{
        const {nome, preco, descricao, categoria} = req.body
        const disponivel = req.body.disponivel === 'on'
        const novoProduto = new Produto({nome, preco, descricao, categoria, disponivel})
        await novoProduto.save()
        res.redirect('/')
    }
    catch(error){
        console.error('error ao adicionar produto', error)
        res.status(500).send('error ao adicionar produto')
    }
})

router.put('/produtos/:id', async(req, res) => {
    const {id} = req.params
    try{
        const produtoAtualizado = await Produto.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        if(!produtoAtualizado) {
            return res.status(404).send('Produto nao encontrado')
        }
        res.status(200).json(produtoAtualizado)
    }
    catch(error) {
        console.error('error ao atualizar produto', error)
        res.status(500).send('error ao atualizar produto')
    }
})

router.delete('/produtos/:id', async(req, res) => {
    const {id} = req.params
    try{
        const produtoDeletar = await Produto.findByIdAndDelete(
            {_id:id},
            req.body,
        )
        if(!produtoDeletar) {
            return res.status(404).send('Produto nao encontrado')
        }
        res.status(200).json(produtoDeletar)
    }
    catch(error) {
        console.error('error ao excluir produto', error)
        res.status(500).send('error ao excluir produto')
    }
})

module.exports = router