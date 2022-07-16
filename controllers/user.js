const { StatusCodes } = require('http-status-codes')
const UserModel = require('../models/user')

const GetUsers = async (req, res) => {
    const users = UserModel.findAll()
    return res.status(StatusCodes.OK).json(users)
}

module.exports = {
    GetUsers
}