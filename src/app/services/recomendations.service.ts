import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class RecomendationsService {

  constructor(private http:HttpClient) { }
  
  baseURL="recommendations/"
  getRecommendations(requirements:any){
    return this.http.post<any[]>(this.baseURL+"getRecommendations",{requirements:requirements})
  }
  
}
