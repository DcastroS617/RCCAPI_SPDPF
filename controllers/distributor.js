const { StatusCodes } = require('http-status-codes')
const DistributorModel = require('../models/distributor')

const GetDistributors = async (req, res) => {
    const distributors = await DistributorModel.findAll()
    return res.status(StatusCodes.OK).json(distributors)
}

module.exports = {
    GetDistributors
}