import { Shouts } from "../enum/Shouts";
import {OfficeWorker} from "./OfficeWorker";

export class OfficeManager extends OfficeWorker{
    
    say():string {
        return `${Shouts.officeManager}`;
    }; 

}