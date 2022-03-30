
const express = require("express");
const authController= require("../controller/auth")

const router=express.Router();

// router.post('/signup', authController.signup)

// router.post('/', authController.login)
router.post("/registeruser", authController.registeruser);
router.post("/checkUser", authController.checkUser);

// router.post('/modaldata',authController.modaldata)

// router.get('/getdata',authController.getdata)

// router.delete('/delete/:id',authController.delete)

// router.post('/orderData',authController.orderData)

// router.get('/orderGet',authController.orderGet)

// router.delete('/deleteOrder/:id',authController.deleteOrder)

// router.get('/getName',authController.getName)

// router.put('/update',authController.update)

module.exports=router;