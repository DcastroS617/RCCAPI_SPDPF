const { StatusCodes } = require('http-status-codes')
const sequelize = require('../db/sequelize')
const NotFoundError = require('../ errors/NotFoundError')
const AutopartModel = require('../models/autopart')
const ProvidorModel = require('../models/providor')
const AutopartDetailModel = require('../models/autopartdetail')
const DistributorModel = require('../models/distributor')

const GetAutoparts = async (req, res) => {
    const { query: { name } } = req
    const queryObject = {}
    if(name){
        queryObject.Name = name
    }
    const autoparts = await AutopartModel.findAll({
        include: [{
            model: ProvidorModel
        },
        {
            model: AutopartDetailModel
        },
        {
            model: DistributorModel
        }],
        attributes: {
            exclude: ['DistributorID', 'ProvidorID', 'AutopartDetailID']
        }
    })
    return res.status(StatusCodes.OK).json(autoparts)
}

const PostAutopart = async (req, res) => {
    const autopart = await AutopartModel.create(req.body)
    return res.status(StatusCodes.CREATED).json(autopart)
}

const GetAutopart = async (req, res) => {
    const { params: { id } } = req
    const autopart = await AutopartModel.findByPk(id)
    if (!autopart) throw new NotFoundError('No se encuentra el repuesto solicitado')
    return res.status(StatusCodes.OK).json(autopart)
}

module.exports = {
    GetAutoparts,
    GetAutopart,
    PostAutopart
}