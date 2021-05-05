import { Human } from "./Human";
 
export class Student extends Human{

    constructor(name: string, email: string, nationality: string){
        super(name, email, nationality);
    }




    toString(){
        return `${this.name} + ${this.email} + ${this.nationality}`
    }



}