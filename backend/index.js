const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    optionsSuccessStatus: 200
}));

app.use("",router);

mongoose.connect("mongodb://localhost:27017/db_project").then(()=>{
    app.listen(port,()=>{console.log(`Listening on ${port}`)})
})