const express = require('express')
const errorHandler = require('./middeware/errorHandeler')
const connectDB = require('./config/dbConnection')
const dontenv = require('dotenv').config()

connectDB()
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoute"))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})