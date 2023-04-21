const express = require('express')
const dontenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use("/api/contacts", require("./routes/contactRoute"))

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})