import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Connection from './database/db.js'
import router from './routes/route.js';
import bodyParser from 'body-parser';
import user from './modal/userSchema.js';
const app = express();
const port = 8080;
dotenv.config();

app.use(bodyParser.json({ extends: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/', router)

Connection();

app.get('/', (req, response) => {
    response.send("HOME PAGE")
})

app.listen(port, () => {
    console.log("Server listening on port " + port)
})