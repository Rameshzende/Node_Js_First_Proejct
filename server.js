const express = require('express')
const errorHandler = require('./middeware/errorHandeler')
const dontenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoute"))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})