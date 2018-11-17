let express = require('express')
let path = require('path')
let logger = require('morgan')
let port = 7000
const {log} = console 
//  setup app
let app = express()

// setup the  static folder for images, js , css, and js libraries
app.use(express.static(__dirname='public'))

// middleware  section 
app.use(logger('dev'))
// init app
app.listen(port,()=>log(`App started at ${port }`))
// routes
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})