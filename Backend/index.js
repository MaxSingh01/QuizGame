import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './routes/auth.js';
import Connection from './connection/db.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

app.use(cors())
app.use('/', route)

Connection();
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT} successfully..`)
})