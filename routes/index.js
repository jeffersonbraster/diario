const express = require('express')
const router = express.Router()

//@desc Login/Landing page
//@route get /
router.get('/', (req, res) => {
    res.render('login')
})

//@desc Dashboard
//@route get /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router