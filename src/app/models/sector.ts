

enum SectorType{
    Category=0,
    FreeTurn,
    LoseTurn,
    YourChoice,
    OpponentsChoice,
    Bankrupt,
    DoubleScore
}
export class Sector{
    name:string
    value:SectorType
    categoryId:number
    constructor(name:string,value:SectorType,categoryId:number){
        this.name=name
        this.value=value
        this.categoryId=categoryId
    }
}