import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { CommunicationProtocol } from '../models/communication-protocol'
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CommunicationProtocolsService {


  constructor(private http:HttpClient) { }

  baseURL="communication_protocols/"
  getCommunicationProtocol():Observable<CommunicationProtocol[]>{
    return this.http.get<any[]>(this.baseURL+"getCommunicationProtocols")
  }
  addCommunicationProtocol(commPro:any){
    return this.http.post<any[]>(this.baseURL+"addCommunicationProtocol",{comm:commPro});
  }
  deleteCommunicationProtocol(commPro:any){
    return this.http.post<any[]>(this.baseURL+"deleteCommunicationProtocol",{comm:commPro});
  }
  updateCommunicationProtocol(commPro:any){
    return this.http.put<any[]>(this.baseURL+"updateCommunicationProtocol",{comm:commPro})
  }
}

