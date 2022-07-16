const express = require('express')
const { GetSales } = require('../controllers/sale')
const router = express.Router()

router.route('/sale').get(GetSales)

module.exports = router