const express =require('express')
const router =express.Router()
require('dotenv').config()
const app =express();
const path = require('path');
const ejs=require('ejs')
const Config = require('./src/config/Config')
const port = Config.PORT || 6000
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());
app.use(cookieParser())
//app.use("/profile", express.static("upload"));
require('./src/Middleware/fileUpload')(app);
const connection = require('./src/config/dbConnection')
require('./Router')(app)
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  app.use('/', router)
app.get('/',(req,res)=>{
    res.json(`MAGAZINE `)
})

server.listen(port,()=>{
    console.log(`server is connected ${port}`);
})