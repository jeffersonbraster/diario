const express = require('express')
const dotenv = require('dotenv')

//carregar config
dotenv.config({path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`Conectado no server ${process.env.NODE_ENV} mode on port ${PORT}`))