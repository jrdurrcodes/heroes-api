//localhost:
// Step 1
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000


// 2
router.use(express.static('public'))

const endpoints = [ 'hero', 'franchise', 'team', 'power']
///individual routes
//rouster.use('api/hero'), reuire('./api/heroRoutes')
endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})



// 3
// router.get(path, callback, function)
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'My Hero Website'
    })
})

// 1b
module.exports = router



