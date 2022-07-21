const express = require('express')
const router = express.Router()
const { GetDistributors, PostDistributor, GetDistributor } = require('../controllers/distributor')

router.route('/distributor').get(GetDistributors).post(PostDistributor)
router.route('/distributor/:id').get(GetDistributor)

module.exports = router