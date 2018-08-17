var express = require('express');
var router = express.Router();
var mysql = require('mysql');

dbURL='47.90.209.206:3306'
dbName="WoJ"

var con = mysql.createConnection({
	host: dbURL,
	user: "admin"
	password: "Jown2018!"
});

//need to know how to process arrays into mysql

router.get('/getAllCategories',(req,res)=>{  
    console.log("Fetching All Categories Information")  
        con.query("SELECT * FROM Questions;")=>{            
            res.json(result)
        }
})
router.get('/getCategory',(req,res)=>{
    console.log("Fetching Category Information")
		con.query("SELECT * FROM Questions WHERE categoryID = $1;")=>{
        if(err){
            return console.log(err)
        }
        res.json(result);
    })     
})

//Need to generate 6 random numbers
router.get('/get6Category',(req,res)=>{
    console.log("Fetching Category Information")
		con.query("SELECT * FROM Questions WHERE categoryID = $1
		OR categoryID = $2 OR categoryID = $3 OR categoryID = $4
		OR categoryID = $5 OR categoryID = $6;")=>{
        if(err){
            return console.log(err)
        }
        res.json(result);
    })     
})
router.put('/addCategory',(req,res)=>{
    console.log("Adding Category Information") 
		con.query("INSERT INTO Questions (questionID, categoryID, category, questiontext, answertext) 
		VALUES ('value1','value2','value3','value4','value5');")=>{
            if (err) {console.error(err); res.send(500,err)}
            console.log("Category Added")
            res.json(result)
        }
)
})

// Need help on edit Category
router.post('/editCategory', function (req, res, next) {    
    console.log("Editing Category") 
    db.collection('questions').updateOne(
        {_id:new ObjectID(req.body.comm._id)}, 
        {$set:{name:req.body.comm.name}},function(err,result){
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document update")
            res.json(result)
        }
)
});

router.post('/deleteCategory',(req,res)=>{
    console.log("Deleting Communication Protocol") 
		con.query("DELETE FROM Questions WHERE categoryID = $1;")=>{
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document deleted")
            res.json(result)
        }
)
})

module.exports = router;