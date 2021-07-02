//DEPENDENCIES
const express = require("express")
const app = require("./app")

//CONFIG
require("dotenv").config()
const PORT = process.env.PORT

//LISTENER
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})