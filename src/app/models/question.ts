export class Question{
    id: number;
    qStatement: string;
    qAnswer:string;
    constructor(id:number,statement:string,answer:string){
        this.id=id;
        this.qStatement=statement;
        this.qAnswer=answer;
    }
}