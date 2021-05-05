import {Student} from "./Student";
import {Mentor} from "./Mentor";

export class Module{
    
moduleName: string;
students!: Student[];
mentor!: Mentor;

    constructor (moduleName: string){
        this.moduleName = moduleName;
    }
}

