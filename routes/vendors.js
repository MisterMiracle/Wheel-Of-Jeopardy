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

router.get('/getVendors',(req,res)=>{
    console.log("Fetching Vendors")   
    db.collection('vendors').find().toArray().then((result)=>{            
        res.json(result)
    })    
})
router.post('/addVendor',(req,res)=>{
    console.log("Adding Vendor")
    db.collection('vendors').save(req.body.vendor,(err,result)=>{
        if(err){
            return console.log(err)
        }
        res.json(result);
    })     
})
router.post('/deleteVendor',(req,res)=>{
    console.log("Deleting Vendor") 
    console.log(req.body)  
    db.collection('vendors').findAndRemove(
        {_id:new ObjectID(req.body.vendor._id)}, 
        (err,result)=>{
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document deleted: ",result)
            res.json(result)
        }
)
})
router.put('/updateVendor', function (req, res, next) {    
    console.log("Updating Vendor") 
      
    db.collection('vendors').updateOne(
        {_id:new ObjectID(req.body.vendor._id)}, 
        {$set:{name:req.body.vendor.name,webpage:req.body.vendor.webpage}}, function(err,result){
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document update: ",result)
            res.json(result)
        }
)
});

var getVendors = 'SELECT * FROM vendor'
var createVendor = 'INSERT INTO vendor(vendor_name) VALUES($1)'
var updateVendor='UPDATE vendor SET vendor_name=$1 WHERE vendor_id=$2'
var deleteVendor = 'DELETE FROM vendor WHERE vendor_id=$1'



// router.get('/getVendors', function(req, res, next) {
//     //do console log if necessary
//     db.query(getVendors, function(err, result) {
//         if (err)
//             { console.error(err); res.send("Error " + err); }
//         else{        
//         res.json(result.rows);
//         }
//     });
// });
// const db = require('../server.js');
router.post('/createVendor', function(req, res, next) {
    var vendor_name = req.body.vendor_name;
    db.query(createVendor,[vendor_name] ,function(err, result) {        
        if (err){ 
            console.error(err); 
            res.send("Error " + err); 
        }        
        else{
            res.send(result.rows);
        }        
    });
});

router.put('/updateVendor', function (req, res, next) {
    var vendor_name = req.body.vendor_name;
    var vendor_id = req.body.vendor_id;
    db.query(updateVendor,[vendor_name ,vendor_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error" + err); 
        }
        else {
            res.json(result);
        }
    });
});


router.delete('/deleteVendor', function (req, res, next) {
    var vendor_id = req.query.vendor_id;
    db.query(deleteVendor,[vendor_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error " + err); 
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;