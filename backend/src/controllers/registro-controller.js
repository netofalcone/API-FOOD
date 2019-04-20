'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/registro-repository');

exports.post =  async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email,' Email inválido');
    contract.hasMinLen(req.body. password,6,'A senha deve conter pelo menos 10 caracteres');
    contract.hasMinLen(req.body.repassword, 6, 'Repita a senha deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body. zona, 2, 'O titulo deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.endereco, 3, 'O titulo deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.cidade, 3, 'O titulo deve conter pelo menos 3 caracteres');


    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body)
        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        });
    } catch(e){

        res.status(500).send({
            message: 'Falha ao processar sua requisição'

        });
    }};