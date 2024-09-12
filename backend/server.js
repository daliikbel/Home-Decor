const express = require('express')
const app = express()
require('dotenv').config()
const cors = require ('cors')
const connectToMongo = require('./helpers/db.connect')
app.use(express.json({limit : '50 mb'}))
app.use(cors())
const port = process.env.PORT || 8000

app.use('/user',require('./routes/user.routes'))
app.use('/post',require('./routes/post.routes'))

connectToMongo()
app.listen(port,(err)=>{
    err? console.log('err', err) : console.log(`server is running on port : ${port}`)
})