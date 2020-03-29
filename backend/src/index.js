const express = require('express')
const routes = require('./routes')
const cors = require('./cors')

const app = express()

//app.use(cors({origin:'localhost:3333'}))
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)