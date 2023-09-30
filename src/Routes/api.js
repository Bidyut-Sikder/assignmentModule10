
const express=require("express")
const userController=require("../Controllers/userController");
const adminController=require("../Controllers/adminController");
const subAdminController=require("../Controllers/subAdminController");
const postController=require("../Controllers/postController");



const router=express.Router()



router.get('/adminController',adminController.create)
router.get('/adminController',adminController.read)
router.get('/adminController',adminController.delete)
router.get('/adminController',adminController.update)



router.get('/userController',userController.create)
router.get('/userController',userController.read)
router.get('/userController',userController.delete)
router.get('/userController',userController.update)


router.get('/subAdminController',subAdminController.create)
router.get('/subAdminController',subAdminController.read)
router.get('/subAdminController',subAdminController.delete)
router.get('/subAdminController',subAdminController.update)


router.get('/postController',postController.create)
router.get('/postController',postController.read)
router.get('/postController',postController.delete)
router.get('/postController',postController.update)






module.exports=router

