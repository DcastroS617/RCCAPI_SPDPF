const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../ errors/NotFoundError')
const ProvidorModel = require('../models/providor')

const GetProvidors = async (req, res) => {
    const providors = await ProvidorModel.findAll()
    return res.status(StatusCodes.OK).json({providors})
}

const PostProvidor = async (req, res) => {
    const providor = await ProvidorModel.create(req.body)
    return res.status(StatusCodes.CREATED).json(providor)
}

const GetProvidor = async (req, res) => {
    const {params: {id}} = req
    const providor = await ProvidorModel.findByPk(id)
    if(!providor){
        throw new NotFoundError('No se encontro el distribuidor solicitado')
    }
    return res.status(StatusCodes.OK).json(providor )
}

const DeleteProvidor = async (req, res) => {
    const {params: {id}} = req
    const providor = await ProvidorModel.destroy({where: { ProvidorID: id}})
    if(!providor) throw new NotFoundError("No se encontro el providor solicitado")
    return res.status(StatusCodes.OK).json({msg: `se elimino el proveedor cuya id fue ${id}`})
}

module.exports = {
    GetProvidors,
    PostProvidor,
    GetProvidor,
    DeleteProvidor
}