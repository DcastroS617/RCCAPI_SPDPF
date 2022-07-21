const express = require('express')
const { GetProvidors, PostProvidor, GetProvidor, DeleteProvidor } = require('../controllers/providor')
const router = express.Router()

router.route('/providor').get(GetProvidors).post(PostProvidor)
router.route('/providor/:id').get(GetProvidor).delete(DeleteProvidor)

module.exports = router