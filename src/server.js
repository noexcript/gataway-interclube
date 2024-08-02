const express = require("express")
const { error } = require('./middleware/error')
require('dotenv').config()
const port = process.env.PORT || 5000
const database = require('./database')
const router = require('./routes')

database()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/', router)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})
app.get('*', (req, res) => {
    res.status(400).json({ message: 'Route not found' })
})

app.use(error)

const server = app.
    listen(port, (e) =>
        console.log(`server is running in ${server.address().address}:${server.address().port}`)
    )