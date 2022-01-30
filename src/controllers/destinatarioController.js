import models from '../models/index.js';

export default {
    add: async (req, res, next) => {
        try {
            await models.DestinatarioInfo.create(req.body);
            res.status(200).send({
                message: 'El destinatario se agrego correctamente'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un problema'
            });
            next(e)
        }
    },
    findAccountByRutOrName: async (req, res, next) => {
        try {
            const value = req.query.value;
            console.log(value);
            const response = await models.DestinatarioInfo.find(
                {
                    $or:[
                        {'rut': new RegExp(value, 'i')},
                        {'name': new RegExp(value, 'i')}
                    ]
                }).exec();
            res.status(200).json(response);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un problema"
            });
            next(e);
        }
    },
    transferTo: async (req, res, next) => {
        try {
            const newTransaction = await models.TransactionInfo.create(req.body);
            res.status(200).json(newTransaction);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un problema"
            });
            next(e);
        }
    },
    getAllAddressee: async (req, res, next) =>{
        try {
            const response = await models.TransactionInfo.find({});
            res.status(200).json(response);
        } catch (e) {
            res.status(500).send({
                message: "Ocurrio un problema"
            });
            next(e)
        }
    },
}
