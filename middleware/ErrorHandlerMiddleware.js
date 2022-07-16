const { StatusCodes } = require("http-status-codes")

const ErrorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        message: err.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR
    }
    return res.status(customError.code).json(customError)
}

module.exports = ErrorHandlerMiddleware