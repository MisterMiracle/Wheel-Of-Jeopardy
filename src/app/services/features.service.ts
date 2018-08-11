import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Feature } from '../models/feature'

@Injectable()
export class FeaturesService {

  constructor(private http:HttpClient) { }
  private baseURL='features/'

  getFeatures():Observable<Feature[]>{
    return this.http.get<any[]>(this.baseURL+'getFeatures')
  }
  addFeature(feature:any){
    return this.http.post<any[]>(this.baseURL+"addFeature",{feature:feature});
  }
  deleteFeature(feature:any){
    return this.http.post<any[]>(this.baseURL+"deleteFeature",{feature:feature})
  }
  updateFeature(feature:any){
    return this.http.put<any[]>(this.baseURL+"updateFeature",{feature:feature})
  }
}
