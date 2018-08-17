var express = require('express');
var router = express.Router();
var mysql = require('mysql');

dbURL='47.90.209.206'
dbName="WoJ"

var con = mysql.createConnection({
	host: dbURL,
	user: "admin",
	password: "Jown2018!",
    database: "WoJ"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//need to know how to process arrays into mysql
var get6Numbers = function(num) {
    var num = num || 12;
    var currentNum = 0;
    var numbers = [];
    for (var i = 0; i < 6; i++) {
        do {
            currentNum = Math.ceil(Math.random() * num);
        } while(numbers.includes(currentNum))
        numbers.push(currentNum);
    }
    numbers.sort(function(a,b) {return a - b});
    return numbers;
}

router.get('/getAllCategories',function(req,res) {  
   console.log("Fetching All Categories Information")  
        con.query("SELECT * FROM Questions", 
            function(err, result) {
                if(err) {
                console.log(err);
            }  
            res.end(json(result));
        })
})

router.get('/getCategory',function(req,res) {
    console.log("Fetching Category Information")
		con.query("SELECT * FROM Questions WHERE categoryID = ?",req.body,
            function(err, result) {
                if(err) {
                console.log(err);
        }
        res.end(JSON(result));
    })     
})

//Need to generate 6 random numbers
//Added function to do so, should be alright now
router.get('/get6Category',function(req,res) {
    var numbers = get6Numbers(12);
    console.log("Fetching Category Information")
		con.query("SELECT * FROM Questions WHERE categoryID = ? OR categoryID = ? OR categoryID = ? OR categoryID = ? OR categoryID = ? OR categoryID = ?", numbers,
        function(err, result) {
            if(err){
            console.log(err);
        }
        res.end(json(result));
    })     
})

//Need to figure out how to parse the Json into SQL command, for loop needed
router.put('/addCategory',function(req,res) {
    console.log("Adding Category Information") 
		con.query("INSERT INTO Questions (questionID, categoryID, category, questiontext, answertext) VALUES ('value1','value2','value3','value4','value5')",
        function(err, result) {
            if (err) {
            console.error(err);
        }
        console.log("Category Added");
        res.end(json(result));
    })
})

// Need help on edit Category
// Probable just a delete and add?
router.post('/editCategory', function (req, res, next) {    
    console.log("Editing Category") 
    db.collection('questions').updateOne(
        {_id:new ObjectID(req.body.comm._id)}, 
        {$set:{name:req.body.comm.name}},function(err,result){
            if (err) {console.error(err); res.send(500,err)}

            console.log("One document update");
            res.end(json(result));
        }
)
});

router.post('/deleteCategory',(req,res)=>{
    console.log("Deleting Communication Protocol") 
		con.query("DELETE FROM Questions WHERE categoryID = ?", req.body,
            function(err, result) {
                if (err) {
                console.error(err); 
            }
            console.log("One document deleted");
            res.end(json(result));
        })
})

module.exports = router;