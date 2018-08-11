import {Question} from './question'
export class Category{
    id: number;
    title: string;
    questions:Question[];
    constructor(id:number,title:string){
        this.id=id;
        this.title=title;
        
    }
}