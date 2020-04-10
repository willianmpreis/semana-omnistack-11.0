const express = require('express')
const {errors} = require('celebrate')
const cors = require('cors')

const routes = require('./routes')

const app = express()

//app.use(cors({origin:'localhost:3333'}))
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app;