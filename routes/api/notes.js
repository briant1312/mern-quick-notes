const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/:id', ensureLoggedIn, usersCtrl.index)
router.post('/', ensureLoggedIn, usersCtrl.create)

module.exports = router