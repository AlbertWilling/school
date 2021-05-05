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
            case "HU": return this.capitalizeFirstLetters(Shouts.studentHU);
            default: return "";
        }
    }

    play():string{
        return `${Instruments.nerves}`;
    }

    capitalizeFirstLetters(text: string):string{
        const wordsArray = text.split(" ");
        for (let i=0; i < wordsArray.length; i++) {
            wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substr(1);
        }
        // console.log(wordsArray);
        return wordsArray.join(" ");
    }
}