var express = require('express')
var router = express.Router()
const { getContacts, createContact, getContact, upDateContact, deleteContact } = require('../controller/contactController')

router.route("/").get(getContacts).post(createContact)

router.route("/:id").get(getContact).put(upDateContact).delete(deleteContact)

module.exports = router 