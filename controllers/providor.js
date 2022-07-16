const { StatusCodes } = require('http-status-codes')
const ProvidorModel = require('../models/providor')

const GetProvidors = async (req, res) => {
    const providors = await ProvidorModel.findAll()
    return res.status(StatusCodes.OK).json({providors})
}

module.exports = {
    GetProvidors
}