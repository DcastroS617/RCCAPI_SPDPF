const express = require('express')
const router = express.Router()

const { GetUsers, Login, Register } = require('../controllers/user')

router.route('/user').get(GetUsers)

//auth routes
router.route('/login').post(Login)
router.route('/register').post(Register)

module.exports = router