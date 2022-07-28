const NotFoundError = require("../ errors/NotFoundError")
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const headers = req.headers.authorization
    if(!headers || !headers.startsWith('bearer')) throw new NotFoundError('debe iniciar sesion para continuar...')
    const token = headers[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {Useremail: payload.Email, UserID: payload.UserID, Username: payload.Username}
        next()
    } catch (error) {
        throw new NotFoundError('usuario invalido.')
    }
}

module.exports = auth