import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
playerNames:string[]=[]
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  setPlayerNames(){
    this.dataService.setPlayerNames(this.playerNames)
  }
}
