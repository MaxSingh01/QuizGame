import express from 'express'
import {registeruser, checkUser} from '../controller/auth.js'

const route=express.Router();

// router.post('/signup', authController.signup)

// router.post('/', authController.login)
route.post("/registeruser", registeruser);
route.post("/checkUser",  checkUser);

// router.post('/modaldata',authController.modaldata)

// router.get('/getdata',authController.getdata)

// router.delete('/delete/:id',authController.delete)

// router.post('/orderData',authController.orderData)

// router.get('/orderGet',authController.orderGet)

// router.delete('/deleteOrder/:id',authController.deleteOrder)

// router.get('/getName',authController.getName)

// router.put('/update',authController.update)

export default route 