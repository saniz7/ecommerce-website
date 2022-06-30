const app = require('express')();
const bodyParser = require('body-parser')
const mongoose=require('mongoose');
const cors = require('cors');
app.use(cors())
const route = require('./route/route');
const material=require('./route/material');
mongoose.connect("mongodb://127.0.0.1/users").then(()=>{
    console.log('Connected');
}).catch(err=>{
    console.log(err);
})

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Test')
})

app.use('/api',route)
app.use('/api',material)


app.listen(8000,()=>{
    console.log('App is running');
})