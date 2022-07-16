const express = require('express')
const { GetCarts } = require('../controllers/shoppingcart')
const router = express.Router()

router.route('/shoppingcart').get(GetCarts)

module.exports = router