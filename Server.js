const express =require('express')
const app =express();
const port = 5000
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.json(`MAGAZINE ${req.id}`)
})
server.listen(port,(req,res)=>{
    console.log(`server is connected ${port}`);
})