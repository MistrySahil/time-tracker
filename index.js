const express = require('express')
const dotenv = require('dotenv')
const expressSession = require('express-session')
const swaggerUi = require('swagger-ui-express')
const { customResponseHandler } = require('./commands/response')
const swaggerFile = require('./swagger-output.json')
const { errorHandler } = require('./commands/errorHandler')
const path = require('path')

dotenv.config()

const dbCon = require('./commands/dbConnection')
dbCon.connect()

const app = express()

const cors = require('cors')

const corsOptions = {
  allowedHeaders: [
    'authorization',
    'Authorization',
    'Origin',
    'Content-Type',
    'Accept',
    'sec-ch-ua',
    'sec-ch-ua-mobile',
    'User-Agent',
    'lang',
    'Referer',
    'sec-ch-ua-platform',
  ],
}
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
)

app.use(express.json())
app.use(customResponseHandler)
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept, Authorization',
  )
  res.header(
    'Access-Control-Allow-Methods',
    'PATCH, PUT, POST, GET, DELETE, OPTIONS, HEAD',
  )
  next()
})

const routes = require('./routes/index')
app.use('/', routes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log('server is up now'))
