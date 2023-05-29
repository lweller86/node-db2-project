const express = require('express')

const router = express.Router()

router.verb('/', async (req, res, next ) => {
    res.json('getting all cars')
})

router.verb('/:id', async (req, res, next ) => {
    res.json(`get cars by id${req.params.id}`)
})

router.verb('/', async (req, res, next ) => {
    res.json('posting new cars.')
})



router.exports = router