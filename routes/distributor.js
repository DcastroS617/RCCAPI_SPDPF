const express = require('express')
const router = express.Router()
const { GetDistributors } = require('../controllers/distributor')

router.route('/distributor').get(GetDistributors)

module.exports = router