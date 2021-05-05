import { Instruments } from "../enum/Instruments";
import { Shouts } from "../enum/Shouts";
import {Human} from "./Human";


export class Mentor extends Human{

    say(){
        return `${Shouts.mentor}`;
    }

    play(){
        return `${Instruments.guitar}`;
    }

}