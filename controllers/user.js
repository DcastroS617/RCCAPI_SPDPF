const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../ errors/NotFoundError')
const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const GetUsers = async (req, res) => {
    const users = await UserModel.findAll()
    return res.status(StatusCodes.OK).json(users)
}

//auth controllers
const Login = async (req, res) => {
    const {body: {Username, Password}} = req
    const user = await UserModel.findOne({where: {Username: Username},})
    if(!user) throw new NotFoundError('el usuario no se encuentra registrado')
    const compare = await bcrypt.compare(Password, user.Password)
    if(!compare) throw new NotFoundError('contrasenha equivocada')
    const token = jwt.sign({UserID: user.UserID, Username, Email: user.Email}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN
    })
    return res.status(StatusCodes.ACCEPTED).json({msg: `welcome ${user.Username}`, token})
}

const Register = async (req, res) => {
    const user = await UserModel.create(req.body)
    return res.status(StatusCodes.ACCEPTED).json({msg: `check your email to validate your account ${req.body.Email}`})
}

module.exports = {
    GetUsers,
    Login,
    Register
}