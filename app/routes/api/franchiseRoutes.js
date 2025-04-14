const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/FranchiseDao')

// findAll
// localhost:3000/api/hero 
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/fran/:franchise', (req,res)=> {
    dao.findHeroesByFranchise(res, dao.table, req.params.franchise)
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
