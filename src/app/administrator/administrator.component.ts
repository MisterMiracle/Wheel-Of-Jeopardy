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
    this.getCategories()
  }

  ngOnInit() {
    
  }
  getCategories(){

    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories=data
    })
    
  }
  addCategoryAction(category:any){
    //category.titleID=this.categories.length
    this.categoryService.addCategory(category).subscribe(data=>{
      this.getCategories()
    });
    
    
  }
  updateCategoryAction(category:any){
    this.categoryService.updateCategory(category).subscribe(data=>{
      this.getCategories()
    });
    
    
    
  }
  
  deleteCategoryAction(categoryId:any){
    this.categoryService.deleteCategory(categoryId).subscribe(data=>{
      this.getCategories();
    });
    
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
    // console.log(this.tempCategory)
    if(this.action=="Add"){
      var outputObjt=this.setUpOutputObject(this.tempCategory)
      console.log("outputobject: ",outputObjt)
      this.addCategoryAction(outputObjt);
    }
    else if(this.action=="Update"){
      var outputObjt=this.setUpOutputObject(this.tempCategory)
      console.log(outputObjt)
      this.updateCategoryAction(outputObjt);
      
    }
    else if(this.action=="Delete"){
      this.deleteCategoryAction(this.tempCategory.titleID)
    }
  }
  resetTempCategory(){
    return {id:0,title:"",questions:[{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""},{qStatement:"",qAnswer:""}]}
  }
  setUpOutputObject(category:any){
    var catObject={
      titleID:category.titleID,
      title:category.title,
      qStatement1:category.questions[0].qStatement,
      qAnswer1:category.questions[0].qAnswer,
      qStatement2:category.questions[1].qStatement,
      qAnswer2:category.questions[1].qAnswer,
      qStatement3:category.questions[2].qStatement,
      qAnswer3:category.questions[2].qAnswer,
      qStatement4:category.questions[3].qStatement,
      qAnswer4:category.questions[3].qAnswer,
      qStatement5:category.questions[4].qStatement,
      qAnswer5:category.questions[4].qAnswer,
    }
    return catObject
  }


}
