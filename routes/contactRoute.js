const express = require("express")
const router = express.outer()

router.route("/").get((req, res) => {
    res.json({"Message" : "Request Sent Back"})
})

module.exports = { router }