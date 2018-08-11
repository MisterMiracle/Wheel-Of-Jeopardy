import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class ToolsService {

  constructor(private http:HttpClient) { }
  
  baseURL="tools/"
  getTools(){
    return this.http.get<any[]>(this.baseURL+"getTools")
  }
  addTool(tool:any){
    return this.http.post<any[]>(this.baseURL+"addTool",{tool:tool});
  }
  deleteTool(tool:any){
    return this.http.post<any[]>(this.baseURL+"deleteTool",{tool:tool})
  }
  updateTool(tool:any){
    return this.http.put<any[]>(this.baseURL+"updateTool",{tool:tool})
  }
}
