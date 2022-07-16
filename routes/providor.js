const express = require('express')
const { GetProvidors } = require('../controllers/providor')
const router = express.Router()

router.route('/providor').get(GetProvidors)

module.exports = router