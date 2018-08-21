export class Player {
    id: number
    name: string
    round1Points:number
    round2Points:number
    totalPoints:number
    numTokens:number

    constructor(id:number,name:string){
      this.id=id
      this.name=name
      this.round1Points=0
      this.round2Points=0
      this.totalPoints=0
      this.numTokens=0
    }
    addRoundPoints(round:number,points:number){
      
      if(round==1){
        this.round1Points+=points
      }
      else{
        this.round2Points+=points
      }
      this.updateTotalPoints()
    }    
    reduceRoundPoints(round:number,points:number){
      if(round==1){
        this.round1Points-=points
      }
      else{
        this.round2Points-=points
      }
      this.updateTotalPoints()
    }
    doublePoints(round:number){
      if(round==1){
        this.round1Points+=this.round1Points
      }
      else{
        this.round2Points+=this.round2Points
      }
    }
    goBankrupt(round:number){
      if(round==1){
        this.round1Points=0;
      }
      else{
        this.round2Points=0
      }
      this.updateTotalPoints()
    }
    getTotalPoints(){
      return this.totalPoints
    }
    hasToken(){
      return this.numTokens>0
    }
    addToken(){
      this.numTokens++
    }
    useOneToken(){
      this.numTokens--
    }
    updateTotalPoints(){
      this.totalPoints=this.round1Points+this.round2Points
    }
  }