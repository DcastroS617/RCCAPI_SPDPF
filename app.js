//import de dependencias.
require('express-async-errors')
require('dotenv').config()

const { StatusCodes } = require('http-status-codes')
const ErrorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware')
const https = require('https')
const fs = require('fs')

const sequelize = require('./db/sequelize')

//modelos en orden gerarquico
//tippy top
const ProvidorRoute = require('./routes/providor')
const DistributorRoute = require('./routes/distributor')
const AutopartDetailRoute = require('./routes/autopartdetail')

//middle
const AutopartRoute = require('./routes/autopart')
const UserRoute = require('./routes/user')

//bikini bottom
const ShoppingcartRoute = require('./routes/shoppingcart')
const SaleRoute = require('./routes/sale')
//fin de la piramide gerarquica de la bd

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('./public'))

app.get('/', (req, res) => {
    return res.status(StatusCodes.OK).send('<h1>Repuestos Costa Carros</h1>')
})

app.use('/api', ProvidorRoute)
app.use('/api', DistributorRoute)
app.use('/api', AutopartDetailRoute)
app.use('/api', AutopartRoute)
app.use('/api', UserRoute)
app.use('/api', ShoppingcartRoute)
app.use('/api', SaleRoute)

app.use(ErrorHandlerMiddleware)

const port = process.env.PORT || 3050
const options = {
    key: fs.readFileSync("/home/certs/SPDSRV.key"),
    cert: fs.readFileSync("/home/certs/SPDSRV.crt")
}

const start = () => {
    sequelize.sync()//{alter:true}
    https.createServer(options, app).listen(port)
    console.log(`app listening on port ${port}`)
    //app.listen(port, () => console.log(`app listening on port ${port}`))
}

start()