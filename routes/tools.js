var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID= require('mongodb').ObjectID

dbURL='mongodb://localhost:27017'
dbName="mosaics"
var db;
MongoClient.connect(dbURL,(err,client)=>{
    if(err){
        return console.log(err)
    }
    db=client.db(dbName)
})

let response={
    status:200,
    message:null,
    data:[]
}


router.get('/getTools',(req,res)=>{
        console.log("Fetching Tools")    
        db.collection('tools').find().toArray().then((tools)=>{            
            res.json(tools)
        })       
        })   

router.post('/addTool',(req,res)=>{
    console.log("Adding Tool")    
    db.collection('tools').save(req.body.tool,function(err,result){
        if(err){ console.error(err); result.send(500,err) }
            
        console.log("One document inserted")
        res.json(result)
    })    
})

router.put('/updateTool',(req,res)=>{
    console.log("Updating Tool")    
    req.body.tool._id=new ObjectID(req.body.tool._id)
    db.collection('tools').save(req.body.tool,function(err,result){
        if(err){ console.error(err); result.send(500,err) }
            
        console.log("One document updated")
        res.json(result)
    }) 
})
router.post('/deleteTool',(req,res)=>{
    console.log("Deleting Tool")    
    db.collection('tools').findOneAndDelete(
        {_id:new ObjectID(req.body.tool._id)}, 
        (err,result)=>{
            if (err) {console.error(err); res.send(500,err)}
            console.log("One document updated")
            res.json(result)
        }
)
})

module.exports = router;
