const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/client')));

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

app.listen(PORT)