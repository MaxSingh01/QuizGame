const express =require ('express')
const mysql = require ('mysql2')
const cors =require ('cors')
const bodyparser=require('body-parser')


const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    database:'quiz'
})
db.connect((error)=>{
    if(error){console.log(error)}
    console.log("database is connected successfully ........");
})

app.set('view engine','hbs')


app.use('',require('./routes/auth'))


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT} successfully..`)
})