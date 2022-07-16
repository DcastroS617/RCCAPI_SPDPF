const { StatusCodes } = require('http-status-codes')
const ShoppingcartModel = require('../models/shoppingcart')

const GetCarts = async (req, res) => {
    const carts = await ShoppingcartModel.findAll()
    return res.status(StatusCodes.OK).json(carts)
}

module.exports = {
    GetCarts
}