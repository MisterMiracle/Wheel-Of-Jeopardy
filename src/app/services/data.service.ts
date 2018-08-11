import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  playerNames:string[]
  constructor() { }

  setPlayerNames(names:string[]){
    this.playerNames=names
  }
  getPlayerNames(){
    return this.playerNames
  }
}
