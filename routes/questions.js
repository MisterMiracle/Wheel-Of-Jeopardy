var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//this will be a table of the Category IDs to pick from
//this categoryList will be used to ensure we don't have the same Category in 2 rounds\
//allCategory will be used for getting all Categories
var categoryList = []; 
var allCategory = [];


dbURL='47.90.209.206'
dbName="WoJ"

var con = mysql.createConnection({
	host: dbURL,
	user: "admin",
	password: "Jown2018!",
    database: dbName,
	multipleStatements:true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  populateCategoryList();
});

//we need to make sure there's a check in the Angular that if there are
//less than 12 categories, the game won't start
router.get('/getAllCategories',function(req,res) {  
   console.log("Fetching All Categories Information")  

	var queryString = "";
	var resultString = "[";

	for(var j=0;j<allCategory.length;j++){
			
		queryString = queryString +  "SELECT * FROM Questions WHERE titleID = ?; ";
		 
	}
	
	con.query(queryString, allCategory,
		function(err, result) {
			if(err){
			console.log(err);
		}
		
		//i'm sorry the string construction is a little nutty, had to do it this way
		//to avoid dealing with asynchronous mysql query issues.
		for(var i=0;i<allCategory.length;i++){
			
			
			resultString = resultString + "{\"titleID\":\"" + result[i][0].titleID + "\", \"title\": \"" +
			result[i][0].title + "\", \"questions\":" + JSON.stringify(result[i]) + "}";
			
			if (i<(allCategory.length - 1)){
					resultString = resultString + ", ";
			}
			else{
					resultString = resultString + "]";
			}
			 
		}
		
		res.end(resultString);
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


router.get('/get6Categories',function(req,res) {
	
	var cats = [];
	var currentCat = 0;

	//this will fill the cats array with 6 random categories
	for(var m = 0; m < 6; m++){
		
		//push a random category onto the cats array
		currentCat = Math.floor(Math.random() * categoryList.length);
		cats[m] = categoryList[currentCat];

		//i then remove the category from the selectable pool - this ensures 
		//we don't return a repeat category for round 2
		categoryList.splice(currentCat, 1);
		
	}
	
	//this will then ask the database for all questions regarding these 5 categories
    console.log("Fetching Category Information")

	var queryString = "";
	var resultString = "[";
	
	for(var j=0;j<6;j++){
			
		queryString = queryString +  "SELECT * FROM Questions WHERE titleID = ?; ";
		 
	}
	
	con.query(queryString, cats,
		function(err, result) {
			if(err){
			console.log(err);
		}
		
		for(var i=0;i<6;i++){
				
			resultString = resultString + "{\"titleID\":\"" + result[i][0].titleID + "\", \"title\": \"" +
			result[i][0].title + "\", \"questions\":" + JSON.stringify(result[i]) + "}";
			
			if (i<5){
					resultString = resultString + ", ";
			}
			else{
					resultString = resultString + "]";
			}
			 
		}
		
		
		res.end(resultString);
		})


})     

router.post('/addCategory',function(req,res) {
    console.log("Adding Category Information") 
				
	//Make a new CategoryID number for this
	var catID;

	var displayText

	do{
		//choose random CategoryID between 1 and 100 that's not already taken
	catID = Math.floor(Math.random() * 100);
	} while(categoryList.indexOf(catID) >= 0) //ensure this catID isn't already taken
	console.log("titleID is set: ", catID);
	
	displayText = "titleID is set: " + catID + "\nCategory Added.";
	
	//add 5 questions to the database
	var constructedQuery;
	var questionConstruct;
	var answerConstruct;
	
	for(var j=1; j<=5; j++){
		questionConstruct = "qStatement" + j;
		answerConstruct = "qAnswer" + j;
		
		constructedQuery = "INSERT INTO Questions (titleID, " +
		"title, qStatement, qAnswer) VALUES " +
		"(" + catID + ",'" + req.param('title') + "','" + req.param(questionConstruct) +
		"','" + req.param(answerConstruct) + "');";
		
		con.query(constructedQuery,
		function(err, result) {
			if (err) {
			console.error(err);
		}
			res.end(displayText);
		})
	}	

	console.log("Category Added");
    
   
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
		
	})
	
	
	var constructedQuery;
	var questionConstruct;
	var answerConstruct;
	
	for(var j=1; j<=5; j++){
		questionConstruct = "qStatement" + j;
		answerConstruct = "qAnswer" + j;
		
		constructedQuery = "INSERT INTO Questions (titleID, " +
		"title, qStatement, qAnswer) VALUES " +
		"(" + req.param('titleID') + ",'" + req.param('title') + "','" + req.param(questionConstruct) +
		"','" + req.param(answerConstruct) + "');";
		
		con.query(constructedQuery,
		function(err, result) {
			if (err) {
			console.error(err);
		}
			res.end("Category Edited");
		})
	}

	console.log("Category Edited");

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
            console.log("One Category deleted");
            res.end("One Category deleted")
        })
		
})

function populateCategoryList() {
  con.query("SELECT DISTINCT titleID FROM Questions", 
				function(err, result) {
					if(err) {
					console.log(err);
				}  
				//loop through entries and add categoryIDs to add to array
				

				for(var k=0; k<result.length; k++){
					
					categoryList[k] = (result[k].titleID);
					allCategory[k] = (result[k].titleID);
				}
				
			})
	return 0;
  
  
}

module.exports = router;