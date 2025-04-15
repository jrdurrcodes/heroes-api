const express = require('express')
const router = express.Router()

const route = require('../../daos/api/powerDao')

// findAll
// localhost:3000/api/power 
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/pow/:power', (req,res)=> {
    dao.findHeroesByPower(res, dao.table, req.params.power)
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
