import { Human } from "./Human";
 
export class Student extends Human{
    nationality: string;

    constructor(name: string, email: string, nationality: string){
        super(name, email);
        this.nationality = nationality;
    }

    


    toString(){
        return `${this.name} + ${this.email} + ${this.nationality}`
    }



}