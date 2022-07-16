const express = require('express')
const router = express.Router()

const { GetUsers } = require('../controllers/user')

router.route('/user').get(GetUsers)

module.exports = router