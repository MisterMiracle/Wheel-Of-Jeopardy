import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Vendor } from '../models/vendor'

@Injectable()
export class VendorsService {

  constructor(private http:HttpClient) { }
  private baseURL='vendors/'
  
  getVendors(){
    return this.http.get<any[]>(this.baseURL+"getVendors")
  }
  addVendor(vendor:any){
    return this.http.post<any[]>(this.baseURL+"addVendor",{vendor:vendor});
  }
  deleteVendor(vendor:any){
    return this.http.post<any[]>(this.baseURL+"deleteVendor",{vendor:vendor})
  }
  updateVendor(vendor:any){
    return this.http.put<any[]>(this.baseURL+"updateVendor",{vendor:vendor})
  }
}
