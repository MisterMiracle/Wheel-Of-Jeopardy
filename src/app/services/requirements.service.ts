import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs';

@Injectable()
export class RequirementsService {

  constructor(private http:HttpClient) { }
  private baseURL='requirements/'
  
  private headers = new HttpHeaders({'Content-Type':'application.json'})
  getRequirements(){
    return this.http.get<any[]>(this.baseURL+"getRequirements")
  }
  createRequirement(requirement){    
    console.log(requirement)
    return this.http.post<any[]>(this.baseURL+"addRequirement",{requirement:requirement})
    
  }
  deleteRequirement(requirement:any){
    return this.http.post<any[]>(this.baseURL+"deleteRequirement",{requirement:requirement})
  }
  updateRequirement(requirement:any){
    return this.http.put<any[]>(this.baseURL+"updateRequirement",{requirement:requirement})
  }
  
}
