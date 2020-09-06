const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const passport = require('passport');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

//carregar config
dotenv.config({path: './config/config.env'})

//configuração do passport
require('./config/passport')(passport)

connectDB()

const app = express()

//Logs
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

//Sessions
app.use(session({
    secret: 'diario2020',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}))

//passport middleare
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))


const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`Conectado no server ${process.env.NODE_ENV} mode on port ${PORT}`))