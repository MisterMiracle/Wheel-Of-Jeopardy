import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service'
import {Category} from '../models/category'
import {Player} from '../models/player'
import {Wheel} from '../models/wheel'
import {DataService} from '../services/data.service'

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
  constructor(private categoryService:CategoryService, private dataService:DataService) {
    this.categories=this.getCategories();
    this.wheel= new Wheel(this.categories)    
    this.playerNames=this.dataService.getPlayerNames()
    var i=0
    for(let name of this.playerNames){
      this.players.push(new Player(i++,name))
    }
    // this.players=[new Player(0,"Bryan"), new Player(1,"Luis"), new Player(2,"Adrian")]
    // console.log("First Player points",this.players[0].getTotalPoints())
    
  }

  ngOnInit() {
    
  }

  getCategories(){
    return this.categoryService.getCategories()
  }

  pickNextQuestion(catId:number){
    //instead of using category id from database default ids from 0 to 5
  }

  spinWheel(){
    //this method should return a value representing the action to be
    this.wheel.spinWheel()
  }

}
