const Produto = require('../models/Produto')

class ProdutoController {
    static async GetAll(req, res) {
        try {
            const produto = await Produto.find();
            return res.status(200).send({ data: produto });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async GetById(req, res) {
        const { id } = req.params;

        try {
            const produto = await Produto.findById(id);

            if (!produto)
                return res.status(404).send({ message: "Produto not found" })
            return res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async Post(req, res) {
        const { nome, valor, categoria, estoque } = req.body;

        if (!nome || !valor || !categoria || !estoque)
            return res.status(400).send({ message: "Dados inválidos" })

        const produto = {
            nome: nome,
            valor: valor,
            categoria: categoria,
            estoque: estoque,
        }

        try {
            const p = await Produto.create(produto);
            return res.status(201).send({ message: "Produto inserido com sucesso", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async Update(req, res) {
        const { id } = req.params;
        const produto = req.body;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        if (!produto.valor)
            return res.status(400).send({ message: "Valor não informado" })

        try {
            const p = await Produto.findByIdAndUpdate(id, {valor: produto.valor});
            return res.status(201).send({ message: `Produto no index ${id} atualizado!`, p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async Delete(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        try {
            await Produto.findByIdAndRemove(id);
            return res.status(200).send({ message: `Produto no index ${id} excluido!` });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }

    }
}

module.exports = ProdutoController;