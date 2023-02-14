const express = require('express')
const router = express.Router()

const notesCtrl = require('../../controllers/api/notes')

router.post('/notes/new', notesCtrl.createNote)

module.exports = router