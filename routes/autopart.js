const express = require('express')
const { GetAutoparts } = require('../controllers/autopart')
const router = express.Router()

router.route('/autopart').get(GetAutoparts)

module.exports = router