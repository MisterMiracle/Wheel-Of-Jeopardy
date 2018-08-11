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

router.get('/getCommunicationProtocols',(req,res)=>{  
    console.log("Fetching Communication Protocols")  
        db.collection('communication_protocols').find().toArray().then((result)=>{            
            res.json(result)
        }) 
})
router.post('/addCommunicationProtocol',(req,res)=>{
    console.log("Adding Communication Protocol")
    db.collection('communication_protocols').save(req.body.comm,(err,result)=>{
        if(err){
            return console.log(err)
        }
        res.json(result);
    })     
})
router.post('/deleteCommunicationProtocol',(req,res)=>{
    console.log("Deleting Communication Protocol") 
    db.collection('communication_protocols').findAndRemove(
        {_id:new ObjectID(req.body.comm._id)}, 
        (err,result)=>{
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document deleted")
            res.json(result)
        }
)
})

router.put('/updateCommunicationProtocol', function (req, res, next) {    
    console.log("Updating Communication Protocol") 
    db.collection('communication_protocols').updateOne(
        {_id:new ObjectID(req.body.comm._id)}, 
        {$set:{name:req.body.comm.name}},function(err,result){
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document update")
            res.json(result)
        }
)
});
var getCommunicationProtocols = 'SELECT * FROM communication_protocol'
var createCommunicationProtocol = 'INSERT INTO communication_protocol(name) VALUES($1)'
var updateCommunicationProtocol='UPDATE communication_protocol SET name=$1 WHERE protocol_id=$2'
var deleteCommunicationProtocol = 'DELETE FROM communication_protocol WHERE protocol_id=$1'


// router.get('/getCommunicationProtocols', function(req, res, next) {
//     //do console.log
//     db.query(getCommunicationProtocols, function(err, result) {
//         if (err)
//             { console.error(err); res.send("Error " + err); }
//         else{
//         res.json(result.rows);
//         }
//     });
// });



// const db = require('../server.js');
router.post('/createCommunicationProtocol', function(req, res, next) {
    var protocol_name = req.body.protocol_name;
    db.query(createCommunicationProtocol,[protocol_name] ,function(err, result) {
        
        if (err){ 
            console.error(err); 
            res.send("Error " + err); 
        }        
        else{
            res.send(result.rows);
        }        
    });
});

router.put('/updateCommunicationProtocol', function (req, res, next) {
    var protocol_name = req.body.protocol_name;
    var protocol_id = req.body.protocol_id;
    db.query(updateCommunicationProtocol,[protocol_name ,protocol_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error" + err); 
        }
        else {
            res.json(result);
        }
    });
});


router.delete('/deleteCommunicationProtocol', function (req, res, next) {
    var protocol_id = req.query.protocol_id;
    db.query(deleteCommunicationProtocol,[protocol_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error " + err); 
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;