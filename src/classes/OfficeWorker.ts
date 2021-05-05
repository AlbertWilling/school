import { Instruments } from "../enum/Instruments";
import {Human} from "./Human";

export class OfficeWorker extends Human{

    play():string{
        return `${Instruments.trumpet}`;
    }
    
}