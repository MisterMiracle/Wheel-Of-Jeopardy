import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  title="Administrator's Page"
  categories:any[];
  tempCategory:any={id:0,title:"",questions:[{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""}]}
  action:String="Add";
  constructor(private categoryService:CategoryService) { 
    this.categories=this.getCategories()
  }

  ngOnInit() {
    
  }
  getCategories(){
    return this.categoryService.getCategories();
  }
  addCategoryAction(category:any){
    category.id=this.categories.length
    this.categoryService.addCategory(category);
    this.categories=this.getCategories();
  }
  updateCategoryAction(category:any){
    this.categoryService.updateCategory(category);
    this.categories=this.getCategories();
  }
  deleteCategoryAction(categoryId:any){
    this.categoryService.deleteCategory(categoryId);
    this.categories= this.getCategories();
  }

  addCategory(){
    this.action="Add"
    this.tempCategory=this.resetTempCategory();
  }
 
  deleteCategory(category:any){
    this.action="Delete"
    this.tempCategory=Object.assign({},category)
  }
  
  updateCategory(category:any){
    this.action="Update"
    this.tempCategory=Object.assign({},category)
  } 
  
  executeCategoryAction(){
    console.log(this.tempCategory)
    if(this.action=="Add"){
      this.addCategoryAction(this.tempCategory);
    }
    else if(this.action=="Update"){
      this.updateCategoryAction(this.tempCategory);
      
    }
    else if(this.action=="Delete"){
      this.deleteCategoryAction(this.tempCategory.id)
    }
  }
  resetTempCategory(){
    return {id:0,title:"",questions:[{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""}]}
  }


}
