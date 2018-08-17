var express = require('express')
var bodyParser  = require('body-parser')
var path = require('path')
var http = require('http')
var app= express()

//import routes
var questions=require('./routes/questions')
//var features=require('./routes/features')
//var tools=require('./routes/tools')
//var communication_protocol=require('./routes/communication_protocols')
//var requirements=require('./routes/requirements')
//var recommendations=require('./routes/recommendations')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'dist')))

//setup routes
app.use('/questions', questions)
//app.use('/communication_protocols', communication_protocol);
//app.use('/vendors', vendors)
//app.use('/requirements',requirements)
//app.use('/tools',tools)
//app.use('/recommendations',recommendations)


app.get('*'),(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
}

var port = process.env.PORT || '3000'
app.set('port',port)

var server=http.createServer(app)
server.listen(port,()=>console.log("Server is running!"))