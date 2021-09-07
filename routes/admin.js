const express=require('express')

const router=express.Router()

const adminController=require('../controllers/admin')

router.post('/add', adminController.postStock)
router.get('/get', adminController.getStock)
router.post('/update', adminController.updateStock)
router.post('/search', adminController.searchStock)

module.exports=router
