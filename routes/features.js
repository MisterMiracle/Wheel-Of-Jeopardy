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

router.get('/getFeatures',(req,res)=>{
    console.log("Fetching Features")
    db.collection('features').find().toArray().then((result)=>{            
        res.json(result)
    })       
})
router.post('/addFeature',(req,res)=>{
    console.log("Adding Feature")
    db.collection('features').save(req.body.feature,(err,result)=>{
        if(err){
            return console.log(err)
        }
        res.json(result);
    })     
})
router.post('/deleteFeature',(req,res)=>{
    console.log("Deleting Feature")   
    db.collection('features').findOneAndDelete(
        {_id:new ObjectID(req.body.feature._id)}, 
        (err,result)=>{
            if (err) {console.error(err); res.send(500,err)}
            console.log("One document deleted")
            res.json(result)
        }
)
})
router.put('/updateFeature', function (req, res, next) {    
    console.log("Updating Feature") 
    db.collection('features').updateOne(
        {_id:new ObjectID(req.body.feature._id)}, 
        {$set:{name:req.body.feature.name,description:req.body.feature.description}},function(err,result){
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document update")
            res.json(result)
        }
)
});

var getFeatures = 'SELECT * FROM feature'
var createFeature = 'INSERT INTO feature(name) VALUES($1)'
var updateFeature='UPDATE feature SET name=$1 WHERE feature_id=$2'
var deleteFeature = 'DELETE FROM feature WHERE feature_id=$1'


// router.get('/getFeatures', function(req, res, next) {
//     //do console log if necessary
//     db.query(getFeatures, function(err, result) {
//         if (err)
//             { console.error(err); res.send("Error " + err); }
//         else{
//         res.json(result.rows);
//         }
//     });
// });


// const db = require('../server.js');
router.post('/createFeature', function(req, res, next) {
    var feature_name = req.body.feature_name;
    db.query(createFeature,[feature_name] ,function(err, result) {
        
        if (err){ 
            console.error(err); 
            res.send("Error " + err); 
        }        
        else{
            res.send(result.rows);
        }        
    });
});

router.put('/updateFeature', function (req, res, next) {
    var feature_name = req.body.feature_name;
    var feature_id = req.body.feature_id;
    db.query(updateFeature,[feature_name ,feature_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error" + err); 
        }
        else {
            res.json(result);
        }
    });
});


router.delete('/deleteFeature', function (req, res, next) {
    var feature_id = req.query.feature_id;
    db.query(deleteFeature,[feature_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error " + err); 
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;