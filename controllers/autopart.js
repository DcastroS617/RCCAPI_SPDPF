const { StatusCodes } = require('http-status-codes')
const AutopartModel = require('../models/autopart')

const GetAutoparts = async (req, res) => {
    const autoparts = await AutopartModel.findAll()
    return res.status(StatusCodes.OK).json(autoparts)
}

module.exports = {
    GetAutoparts
}