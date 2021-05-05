import { Instruments } from "../enum/Instruments";
import { Shouts } from "../enum/Shouts";
import { Human } from "./Human";
 
export class Student extends Human{

    constructor(name: string, email: string, nationality: string){
        super(name, email, nationality);
    }

    say(){
        switch(this.nationality){
            case "PL": return `${Shouts.studentPL}`;
            case "HU": return `${Shouts.studentHU}`;
            default: return "";
        }
    }

    play():string{
        return `${Instruments.nerves}`;
    }
}