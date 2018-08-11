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
    addRound1Points(points:number){
      this.round1Points+=points
    }
    addRound2Points(points:number){
      this.round2Points+=points
    }
    reduceRound1Points(points:number){
      this.round1Points-=points
    }
    reduceRound2Points(points:number){
      this.round2Points-=points
    }
    goBankrupt(round:number){
      if(round==1){
        this.round1Points=0;
      }
      else{
        this.round2Points=0
      }
    }
    getTotalPoints(){
      return this.totalPoints
    }
    hasToken(){
      return this.numTokens>0
    }
  }