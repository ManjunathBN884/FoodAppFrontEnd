import { Manager } from "./manager"

export class Menu {
    id:number | undefined
    name:String | undefined
    type:String | undefined
    manager=new Manager()
    constructor(){}
}
