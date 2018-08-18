var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var categoryList = []; //this will be a table of the Category IDs to pick from
//this categoryList will be used to ensure we don't have the same Category in 2 rounds

dbURL='47.90.209.206'
dbName="WoJ"

var con = mysql.createConnection({
	host: dbURL,
	user: "admin",
	password: "Jown2018!",
    database: dbName
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//need to know how to process arrays into mysql

//we need to make sure there's a check in the Angular that if there are
//less than 12 categories, the game won't start
router.get('/getAllCategories',function(req,res) {  
   console.log("Fetching All Categories Information")  
        con.query("SELECT DISTINCT titleID FROM Questions", 
            function(err, result) {
                if(err) {
                console.log(err);
            }  
			//loop through entries and add categoryIDs to add to array
			var i;
			
			for(i=0; i<result.length; i++){
				
				//Need to Verify this category name (titleID)
				categoryList.push(result[i].titleID);
				
			}
			//console.log(JSON.stringify(result));
			//send json message to angular
            res.end(JSON.stringify(result));
        })
})

router.get('/getCategory',function(req,res) {
    console.log("Fetching Category Information")
		
		

		con.query("SELECT * FROM Questions WHERE titleID = ?",req.param('titleID'),
            function(err, result) {
                if(err) {
                console.log(err);
        }
        res.end(JSON.stringify(result));
    })     
})

//Need to generate 6 random numbers
router.get('/get6Category',function(req,res) {
	
	var cats = [];
	var currentCat = 0;
	
	var i;
	
	//this will fill the cats array with 6 random categories
	for(i = 0; i < 6; i++){
		
		//push a random category onto the cats array
		currentCat = Math.floor(Math.random() * categoryList.length)
		cats[i] = categoryList[currentCat];
		
		//i then remove the category from the selectable pool - this ensures 
		//we don't return a repeat category for round 2
		categoryList.splice(currentCat, 1);
		
	}
	
	//this will then ask the database for all questions regarding these 5 categories
    console.log("Fetching Category Information")
	
	var queryString = "SELECT * FROM Questions WHERE categoryID = + " + cats[0] +
	 " OR categoryID =  " + cats[1] + " OR categoryID =  " + cats[2] + 
	 " OR categoryID =  " + cats[3] + " OR categoryID =  " + cats[4] + 
	" OR categoryID =  " + cats[5] + ";";
	
	
	con.query(queryString,
	function(err, result) {
		if(err){
		console.log(err);
	}
	res.end(JSON.stringify(result));
	})     
})


router.post('/addCategory',function(req,res) {
    console.log("Adding Category Information") 
				
	//Make a new CategoryID number for this
	var catID;

	do{
		//choose random CategoryID between 1 and 100 that's not already taken
	catID = Math.floor(Math.random() * 100);
	} while(categoryList.indexOf(catID) >= 0) //ensure this catID isn't already taken
	console.log("catId is set: ?", catID);
	
	
	//add 6 questions to the database
	var constructedQuery;
	var questionConstruct;
	var answerConstruct;
	
	var j=1;
	for(j=1; j<=5; j++){
		questionConstruct = "question" + j;
		answerConstruct = "answer" + j;
		
		constructedQuery = "INSERT INTO Questions (titleID, " +
		"title, qStatement, qAnswer) VALUES " +
		"(" + catID + ",'" + req.param('title') + "','" + req.param(questionConstruct) +
		"','" + req.param(answerConstruct) + "');";
		
		console.log(constructedQuery);
		con.query(constructedQuery,
		function(err, result) {
			if (err) {
			console.error(err);
		}
			console.log("Question Added", j);
			res.end();
		})
	}	
    
   
})

// Basically the same as addCategory, but we first delete old entries
router.put('/editCategory', function (req, res) {    
    console.log("Editing Category") 
	
	//Delete Previous Entries
	console.log("Deleting Previous Category for Replacement") 
		
	con.query("DELETE FROM Questions WHERE titleID = ?", req.param('titleID'),
		function(err, result) {
			if (err) {
			console.error(err); 
		}
		console.log("Previous Entries Deleted");
		
	})
	
	
	var constructedQuery;
	var questionConstruct;
	var answerConstruct;
	
	var j=1;
	for(j=1; j<=5; j++){
		questionConstruct = "question" + j;
		answerConstruct = "answer" + j;
		
		constructedQuery = "INSERT INTO Questions (titleID, " +
		"title, qStatement, qAnswer) VALUES " +
		"(" + req.param('titleID') + ",'" + req.param('title') + "','" + req.param(questionConstruct) +
		"','" + req.param(answerConstruct) + "');";
		
		console.log(constructedQuery);
		con.query(constructedQuery,
		function(err, result) {
			if (err) {
			console.error(err);
		}
			console.log("Question Added", j);
			res.end();
		})
	}

});

router.post('/deleteCategory',(req,res)=>{
    console.log("Deleting Category") 
		//this assumes we're receiving a request to delete a categoryID, which is passed
		//as an integer parameter from the Angular
		con.query("DELETE FROM Questions WHERE titleID = ?", req.param('titleID'),
            function(err, result) {
                if (err) {
                console.error(err); 
            }
            console.log("One document deleted");
            res.end(JSON.stringify(result))
        })
		
})

module.exports = router;