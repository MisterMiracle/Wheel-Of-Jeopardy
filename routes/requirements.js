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


router.get('/getRequirements',(req,res)=>{
        console.log("Fetching Requirements")    
        db.collection('requirements').find().toArray().then((requirements)=>{            
            res.json(requirements)
        })       
        })   

router.post('/addRequirement',(req,res)=>{
    console.log("Adding Requirement")    
    db.collection('requirements').save(req.body.requirement,function(err,result){
        if(err){ console.error(err); result.send(500,err) }
            
        console.log("One document inserted")
        res.json(result)
    })    
})

router.put('/updateRequirement',(req,res)=>{
    console.log("Updating Requirement")   
    req.body.requirement._id=new ObjectID(req.body.requirement._id) 
    db.collection('requirements').save(req.body.requirement,function(err,result){
        if(err){ console.error(err); result.send(500,err) }
            
        console.log("One document updated")
        res.json(result)
    }) 
})
router.post('/deleteRequirement',(req,res)=>{
    console.log("Deleting Requirement")    
    db.collection('requirements').findOneAndDelete(
        {_id:new ObjectID(req.body.requirement._id)}, 
        (err,result)=>{
            if (err) {console.error(err); res.send(500,err)}
            console.log("One document updated")
            res.json(result)
        }
)
})

module.exports = router;
