const { StatusCodes } = require('http-status-codes')
const SaleModel = require('../models/sale')

const GetSales = async (req, res) => {
    const sales = await SaleModel.findAll()
    return res.status(StatusCodes.OK).json(sales)
}

module.exports = {
    GetSales
}