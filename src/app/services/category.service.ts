import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Category} from '../models/category'
import {CATEGORIES} from '../models/categories'
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class CategoryService {
  categories = CATEGORIES
  baseURL="http://localhost:3000/questions"
  constructor(private http:HttpClient) { }
  get6Categories():Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+"/get6Categories")
  }
  getAllCategories():Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+"/getAllCategories")
  }
  deleteCategory(titleId:number){    
    console.log("Deleting category")
    return this.http.post<any[]>(this.baseURL+"/deleteCategory",{titleID:titleId});
  }
  // getCategories(){
  //   return this.categories;
  // }
  addCategory(category:any){
    console.log("estoy tratando de anadir categoria")
    // this.categories.push(category);
    return this.http.post<any[]>(this.baseURL+"/addCategory",category)
   
   
  }
  // deleteCategory(categoryId:any){
  //   for(var i=0;i<this.categories.length;i++){
  //       if(this.categories[i].id==categoryId){
  //         this.categories.splice(i,1);
  //       }
  //   } 
  // }  
  updateCategory(category:any){
    console.log("llegue a la parte de atras")
    return this.http.post<any[]>(this.baseURL+"/editCategory",category);
    // for(var i=0;i<this.categories.length;i++){
    //   if(this.categories[i].titleID==category.titleID){
    //     this.categories[i]=category
    //   }
    // }
  }
}
