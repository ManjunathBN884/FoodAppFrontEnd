import { Menu } from "./menu"

export class FoodProduct {
    id:number | undefined
    availability:String | undefined
    category:String | undefined
    name:String | undefined
    price:number | undefined
    menu =new Menu()
    constructor(){}
}
