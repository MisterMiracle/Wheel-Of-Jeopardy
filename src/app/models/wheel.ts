import {Category} from './category'
import {Sector} from './sector'

enum SectorType{
    Category=0,
    FreeTurn,
    LoseTurn,
    YourChoice,
    OpponentsChoice,
    Bankrupt,
    DoubleScore
}
export class Wheel{
    sectors:Sector[]=[]
    constructor(categories:Category[]){
/*        
        this.sectors.push(new Sector("FreeTurn",SectorType.FreeTurn,-1))
        this.sectors.push(new Sector("Bankrupt",SectorType.Bankrupt,-1))
        this.sectors.push(new Sector("LoseTurn",SectorType.LoseTurn,-1))
        this.sectors.push(new Sector("DoubleScore",SectorType.DoubleScore,-1))
        this.sectors.push(new Sector("YourChoice",SectorType.YourChoice,-1))
        this.sectors.push(new Sector("OpponentsChoice",SectorType.OpponentsChoice,-1))
        var i=0;
        for(let cat of categories){
            this.sectors.push(new Sector(cat.title,SectorType.Category,i++))
        }
		*/
        var i=0;
        for(let cat of categories){
            this.sectors.push(new Sector(cat.title,SectorType.Category,i++))
        }		
        this.sectors.push(new Sector("FreeTurn",SectorType.FreeTurn,-1))
        this.sectors.push(new Sector("LoseTurn",SectorType.LoseTurn,-1))
        this.sectors.push(new Sector("YourChoice",SectorType.YourChoice,-1))
        this.sectors.push(new Sector("OpponentsChoice",SectorType.OpponentsChoice,-1))
        this.sectors.push(new Sector("Bankrupt",SectorType.Bankrupt,-1))
        this.sectors.push(new Sector("DoubleScore",SectorType.DoubleScore,-1))		
		
    }
    spinWheel():Sector{
       return this.sectors[Math.floor(Math.random() * 12)] 
	   //return this.sectors[8]
    }
}