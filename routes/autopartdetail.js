const express = require('express')
const { GetAutopartsDetails, PostAutopartDetail, GetAutopartsDetail } = require('../controllers/autopartdetail')
const router = express.Router()

router.route('/autopartdetail').get(GetAutopartsDetails).post(PostAutopartDetail)
router.route('/autopartdetail/:id').get(GetAutopartsDetail)

module.exports = router