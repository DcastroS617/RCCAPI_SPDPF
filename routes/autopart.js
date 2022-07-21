const express = require('express')
const { GetAutoparts, PostAutopart, GetAutopart } = require('../controllers/autopart')
const router = express.Router()

router.route('/autopart').get(GetAutoparts).post(PostAutopart)
router.route('/autopart/:id').get(GetAutopart)

module.exports = router