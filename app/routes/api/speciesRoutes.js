const express = require('express')
const router = express.Router()

const route = require('../../daos/api/speciesDao')

// findAll
// localhost:3000/api/hero 
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/spec/:species', (req,res)=> {
    dao.findHeroesBySpecies(res, dao.table, req.params.species)
})

//sort
router.get('/sort', (req, res)=> {
    dao.sortGeneral(res, dao.table)
})


// findById
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router
