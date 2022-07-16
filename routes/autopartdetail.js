const express = require('express')
const { GetAutopartsDetails } = require('../controllers/autopartdetail')
const router = express.Router()

router.route('/autopartdetail').get(GetAutopartsDetails)

module.exports = router