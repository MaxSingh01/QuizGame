// const express =require ('express');
// const mysql = require ('mysql2');
// const cors =require ('cors');
// const bodyparser=require('body-parser');
// const mongoose= require('mongoose');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './routes/auth.js';


const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/userDB',{useNewUrlParser: true});
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT} successfully..`)
})