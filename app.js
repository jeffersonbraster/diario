const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')

//carregar config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`Conectado no server ${process.env.NODE_ENV} mode on port ${PORT}`))