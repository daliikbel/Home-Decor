const router = require('express').Router()
const userCtrl = require('../controllers/user.controller')
const { validationData } = require('../middleware/data.checker')
const isAdmin = require('../middleware/isAdmin')
const isAuthenticated = require('../middleware/isAuth')


router.post('/register',validationData,userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/me', isAuthenticated ,userCtrl.getMe )


module.exports=router


