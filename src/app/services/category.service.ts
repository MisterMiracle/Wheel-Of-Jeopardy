import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CATEGORIES} from '../models/categories'

@Injectable()
export class CategoryService {
  categories = CATEGORIES
  constructor() { }
  getCategories(){
    return this.categories;
  }
  addCategory(category:any){
    this.categories.push(category);
  }
  deleteCategory(categoryId:any){
    for(var i=0;i<this.categories.length;i++){
        if(this.categories[i].id==categoryId){
          this.categories.splice(i,1);
        }
    } 
  }  
  updateCategory(category:any){
    for(var i=0;i<this.categories.length;i++){
      if(this.categories[i].id==category.id){
        this.categories[i]=category
      }
    }
  }
}
