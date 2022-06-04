import express from 'express'
import {registeruser, checkUser} from '../controller/auth.js'

const route=express.Router();


route.get('/',(req,res)=>{
   res.send('Hello server is running')
})
route.post("/registeruser", registeruser);
route.post("/checkUser",  checkUser);



export default route 