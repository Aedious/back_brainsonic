const express = require('express')
const app = express()
const port = 3000

app.get('/mult', (req, res) => {
    var nb1 = req.query.nb1
    var nb2 = req.query.nb2
    result = nb1 * nb2
    res.status(200).send({ value: result })
})

app.get('/add', (req, res) => {
    var nb1 = req.query.nb1
    var nb2 = req.query.nb2
    result = nb1 + nb2
    res.status(200).send({ value: result })
})

app.get('/sub', (req, res) => {
    var nb1 = req.query.nb1
    var nb2 = req.query.nb2
    result = nb1 - nb2
    res.status(200).send({ value: result })
})

app.get('/div', (req, res) => {
    var nb1 = req.query.nb1
    var nb2 = req.query.nb2
    result = nb1 / nb2
    res.status(200).send({ value: result })
})

app.get('/factorial', (req, res) => {
    var data = req.query.nbr
    result = 1
    for (let i = 1; i <= data ; i++) {
        result *= i
    }
    console.log(result)
    res.status(200).send({ value: result })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})