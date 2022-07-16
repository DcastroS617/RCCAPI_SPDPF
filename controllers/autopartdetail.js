const { StatusCodes } = require('http-status-codes')
const AutopartDetailModel = require('../models/autopartdetail')

const GetAutopartsDetails = async (req, res) => {
    const details = await AutopartDetailModel.findAll()
    return res.status(StatusCodes.OK).json(details)
}

module.exports = {
    GetAutopartsDetails
}