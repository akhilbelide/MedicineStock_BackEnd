const express=require('express')

const router=express.Router()

const userController=require('../controllers/user')

router.get('/get', userController.getStock)
router.post('/update', userController.updateStock)
router.post('/search', userController.searchStock)

module.exports=router
