const { StatusCodes } = require('http-status-codes')
const NotFoundError  = require('../ errors/NotFoundError')
const DistributorModel = require('../models/distributor')

const GetDistributors = async (req, res) => {
    const distributors = await DistributorModel.findAll()
    return res.status(StatusCodes.OK).json(distributors)
}

const PostDistributor = async (req, res) => {
    const distributor = await DistributorModel.create(req.body)
    return res.status(StatusCodes.CREATED).json(distributor)
}

const GetDistributor = async (req, res) => {
    const {params: {id}} = req
    const distributor = await DistributorModel.findByPk(id)
    if(!distributor){
        throw new NotFoundError('No se encontro el distribuidor solicitado')
    }
    return res.status(StatusCodes.OK).json(distributor)
}

module.exports = {
    GetDistributors,
    PostDistributor,
    GetDistributor
}