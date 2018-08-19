import {Question} from './question'
export class Category{
    titleID: number;
    title: string;
    questions:Question[];
	//questionIndex: number;
    constructor(id:number,title:string){
        this.titleID=id;
        this.title=title;
		//this.questionIndex=0;
        
    }
}