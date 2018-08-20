import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service'
import {Category} from '../models/category'
import {CATEGORIES} from '../models/categories'
import {Question} from '../models/question'
import {Player} from '../models/player'
import {Wheel} from '../models/wheel'
import {GameStatus} from '../models/game-status'
import {Sector} from '../models/sector'
import {DataService} from '../services/data.service'
import * as $ from 'jquery'; 
@Component({
  selector: 'app-wheel-of-jeopardy',
  templateUrl: './wheel-of-jeopardy.component.html',
  styleUrls: ['./wheel-of-jeopardy.component.css']
})
export class WheelOfJeopardyComponent implements OnInit {
  playerNames:string[]=[]
  categories:Category[]
  players:Player[]=[]
  wheel:Wheel
  gameStatus:GameStatus
  sector:Sector
  message:string=""
  questionIndex: number[]=[0,0,0,0,0,0]
  questionPicked: Question
  nextQuestion:string
  nextAnswer:string
  userPrompt:string
  categoryPickedId:number=0
  winner:string=""
  landedOn:string=""
  //var oppBool = 0;
  
  constructor(private categoryService:CategoryService, private dataService:DataService) {
    
    // this.categories=this.getCategories();
    this.categoryService.get6Categories().subscribe(data=>{
      this.categories=data
      this.wheel= new Wheel(this.categories) 
    }) 
    
       
    this.playerNames=this.dataService.getPlayerNames() 
    var i=0
    for(let name of this.playerNames){
      this.players.push(new Player(i++,name))
    }
    // this.playerNames=["Bryan","Luis","Adrian"]
    // this.players=[new Player(0,"Bryan"), new Player(1,"Luis"), new Player(2,"Adrian")]
    this.gameStatus=new GameStatus(this.playerNames) 
    this.message=this.gameStatus.playerInTurnName +" is your turn to spin the wheel"
    $("#messageModalButton").click();
    
    // console.log("First Player points",this.players[0].getTotalPoints())
    
  }

  ngOnInit() {
    
  }

  

  pickNextQuestion(catId:number){
    
    this.categoryPickedId=catId
    var qIndex=this.questionIndex[catId]
    if(qIndex==5){
      if(this.landedOn=="YourChoice"||this.landedOn=="OpponentsChoice"){
        this.message="Please select another category; the selected category has no available questions"
        $("#messageModalButton").click();
      }
      else{
        this.message="All question for "+this.categories[catId].title+" have been answered. Please spin the wheel again"
        $("#messageModalButton").click();
      }
      

    }
    else{
      $(".question"+qIndex+"-"+catId).addClass("questionPicked")
      //instead of using category id from database default ids from 0 to 5
      //this.CATEGORIES.Category[catID]
      this.questionPicked = this.categories[catId].questions[qIndex]
      this.nextQuestion = this.questionPicked.qStatement
      this.questionIndex[catId]++
      //this.nextQuestion = this.categories[catId].questions[this.questionIndex[catId]].qStatement
      $("#triggerModalButtonPickQuestion").click()
    }
    
  }
  
  displayAnswer(){
	this.nextAnswer = this.questionPicked.qAnswer
	$("#triggerModalButtonDisplayAnswer").click()	
  }
  
  nextTurn(){
    
    if(this.gameStatus.spinsInRound>=50||this.checkIndecesInQuestionBoard()){
      if(this.gameStatus.roundNumber==1){
        this.gameStatus.nextRound()
        this.categoryService.get6Categories().subscribe(data=>{
          this.categories=data
          this.wheel= new Wheel(this.categories)
        })
        
        this.resetQuestionBoard()      
        this.questionIndex=[0,0,0,0,0,0]
        this.message="Starting Round 2. "+this.gameStatus.playerInTurnName +" is your turn to spin the wheel"
        $("#messageModalButton").click();
        this.disableCategoryButtons();
      }
      else{
        this.winner=this.checkWinner()
        $("#triggerModalShowWinner").click()
      }
    }else{
      this.gameStatus.nextPlayerTurn()
      this.message=this.gameStatus.playerInTurnName +" is your turn to spin the wheel"
      $("#messageModalButton").click();
      this.disableCategoryButtons();
    }
    
    
  }
  checkWinner(){
    if((this.players[0].getTotalPoints()>this.players[1].getTotalPoints())&&(this.players[0].getTotalPoints()>this.players[2].getTotalPoints())){
      return this.players[0].name
    }
    else if ((this.players[1].getTotalPoints()>this.players[0].getTotalPoints())&&(this.players[1].getTotalPoints()>this.players[2].getTotalPoints())){
      return this.players[1].name
    }
    else{
      return this.players[2].name
    }
  }
  checkIndecesInQuestionBoard(){
    return (this.questionIndex[0]==5&&this.questionIndex[1]==5&&this.questionIndex[2]==5&&this.questionIndex[3]==5&&this.questionIndex[4]==5)
  }
  spinWheel(){
    this.gameStatus.addSpin()
    //this method should return a value representing the action to be
    this.sector=this.wheel.spinWheel()
    this.landedOn=this.sector.name;
    switch(this.landedOn){
      case "YourChoice":{
        this.userPrompt = this.gameStatus.playerInTurnName+" picks a category";
        break;
      }
      case "OpponentsChoice":{
        this.userPrompt = "Opponent picks a category";
        break;
      }	
      default:{
        this.userPrompt = "";
        break;
      }
	}
    
    $("#triggerModalButton").click()
  }
  freeTurn(){
    this.message=this.gameStatus.playerInTurnName +" earns a token!"
    this.players[this.gameStatus.playerIndex].addToken()
    $("#message2ModalButton").click();
    // this.nextTurn()
  }
  loseTurn(){
    if(this.players[this.gameStatus.playerIndex].hasToken()){
      this.disableCategoryButtons()
      $("#triggerModalButtonPlayerHasTokens").click();
      
    }
    else{
      this.message=this.gameStatus.playerInTurnName +" loses turn"
      $("#message2ModalButton").click();
      // this.nextTurn();
    }
  }
  useToken(){
    this.players[this.gameStatus.playerIndex].useOneToken();
    this.message=this.gameStatus.playerInTurnName +" you can spin the wheel again"
    $("#messageModalButton").click();
  }
  dontUseToken(){
    this.nextTurn();
  }
  enableCategoryButtons(){
    $(".categoryButton").removeClass("btn-danger")
    $(".categoryButton").addClass("btn-primary")
    $(".categoryButton").removeClass("disabled")
    //disable spin wheel button
    $(".spinWheelButton").removeClass("btn-success")
    $(".spinWheelButton").addClass("btn-danger")
    $(".spinWheelButton").addClass("disabled")
  }
  disableCategoryButtons(){
    //enable spin wheel buttons
    $(".spinWheelButton").removeClass("btn-danger")
    $(".spinWheelButton").addClass("btn-success")
    $(".spinWheelButton").removeClass("disabled")

    $(".categoryButton").removeClass("btn-primary")
    $(".categoryButton").addClass("btn-danger")
    $(".categoryButton").addClass("disabled")
  }
  bankrupt(){
    this.message=this.gameStatus.playerInTurnName +" loses all the points accumulated in this round."
    $("#message2ModalButton").click();
    this.players[this.gameStatus.playerIndex].goBankrupt(this.gameStatus.roundNumber)
    // this.nextTurn()
  }
  doubleScore(){
    this.message=this.gameStatus.playerInTurnName +" score has been doubled!"
    $("#message2ModalButton").click();
    this.players[this.gameStatus.playerIndex].addRoundPoints(this.gameStatus.roundNumber,this.players[this.gameStatus.playerIndex].getTotalPoints())
    // this.nextTurn();  
  }
  opponentsChoice(){
    this.enableCategoryButtons()
   //enable category buttons
  }
  yourChoice(){
    this.enableCategoryButtons()
    //enable category buttons
  }
  wrongAnswer(){
    if(this.players[this.gameStatus.playerIndex].hasToken()){
      this.players[this.gameStatus.playerIndex].reduceRoundPoints(this.gameStatus.roundNumber,this.calculatePoints(this.questionIndex[this.categoryPickedId]))
      this.disableCategoryButtons()
      $("#triggerModalButtonPlayerHasTokens").click();
      
    }else{
      this.players[this.gameStatus.playerIndex].reduceRoundPoints(this.gameStatus.roundNumber,this.calculatePoints(this.questionIndex[this.categoryPickedId]))
      this.nextTurn()
    }
    
    //disableButtons
  }
  correctAnswer(){
    this.players[this.gameStatus.playerIndex].addRoundPoints(this.gameStatus.roundNumber,this.calculatePoints(this.questionIndex[this.categoryPickedId]))
    this.nextTurn()
    //disableButtons
  }
  calculatePoints(questionIndex:number){
    return questionIndex*200*this.gameStatus.roundNumber
  }
  parseSpinResult(){
    switch(this.sector.value){
      case 0:{
		    this.pickNextQuestion(this.sector.categoryId)
        //this.showQuestionFromCategory()
        break;
      }
      case 1:{
        this.freeTurn()
        break;
      }
      case 2:{
        this.loseTurn();
        break;
      }
      case 3:{
        this.yourChoice()
        break;
      }
      case 4:{
        this.opponentsChoice()
        break;
      }
      case 5:{
        this.bankrupt()
        break;
      }
      case 6:{
        this.doubleScore()
        break;
      }
    }
  }
  resetQuestionBoard(){
    $(".question0-0").removeClass("questionPicked")
    $(".question1-0").removeClass("questionPicked")
    $(".question2-0").removeClass("questionPicked")
    $(".question3-0").removeClass("questionPicked")
    $(".question4-0").removeClass("questionPicked")
    $(".question0-1").removeClass("questionPicked")
    $(".question1-1").removeClass("questionPicked")
    $(".question2-1").removeClass("questionPicked")
    $(".question3-1").removeClass("questionPicked")
    $(".question4-1").removeClass("questionPicked")
    $(".question0-2").removeClass("questionPicked")
    $(".question1-2").removeClass("questionPicked")
    $(".question2-2").removeClass("questionPicked")
    $(".question3-2").removeClass("questionPicked")
    $(".question4-2").removeClass("questionPicked")
    $(".question0-3").removeClass("questionPicked")
    $(".question1-3").removeClass("questionPicked")
    $(".question2-3").removeClass("questionPicked")
    $(".question3-3").removeClass("questionPicked")
    $(".question4-3").removeClass("questionPicked")
    $(".question0-4").removeClass("questionPicked")
    $(".question1-4").removeClass("questionPicked")
    $(".question2-4").removeClass("questionPicked")
    $(".question3-4").removeClass("questionPicked")
    $(".question4-4").removeClass("questionPicked")
    $(".question0-5").removeClass("questionPicked")
    $(".question1-5").removeClass("questionPicked")
    $(".question2-5").removeClass("questionPicked")
    $(".question3-5").removeClass("questionPicked")
    $(".question4-5").removeClass("questionPicked")
  }

}
