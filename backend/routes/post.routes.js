const router = require('express').Router()
const postCtrl = require('../controllers/post.controller')
const isAuthenticated = require('../middleware/isAuth')
const checkOwner = require('../middleware/owner.checker')



router.post('/add-post',isAuthenticated,postCtrl.addPost)
router.put('/update-post/:id' , isAuthenticated , checkOwner, postCtrl.updatePost)




module.exports=router