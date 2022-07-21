const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../ errors/NotFoundError')
const AutopartDetailModel = require('../models/autopartdetail')

const GetAutopartsDetails = async (req, res) => {
    const details = await AutopartDetailModel.findAll()
    return res.status(StatusCodes.OK).json(details)
}

const PostAutopartDetail = async (req, res) => {
    const detail = await AutopartDetailModel.create(req.body)
    return res.status(StatusCodes.CREATED).json(detail)
}

const GetAutopartsDetail = async (req, res) => {
    const {params: {id}} = req
    const detail = await AutopartDetailModel.findByPk(id)
    if(!detail) throw new NotFoundError('no se encontro el repuesto solicitado')
    return res.status(StatusCodes.OK).json(detail)
}

module.exports = {
    GetAutopartsDetails,
    PostAutopartDetail,
    GetAutopartsDetail
}