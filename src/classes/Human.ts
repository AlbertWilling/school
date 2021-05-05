import {iHuman} from "../interfaces/iHuman";

export abstract class Human implements iHuman{

    name: string;
    email: string;
    nationality: string;

    constructor(name: string, email: string, nationality: string){
        this.name = name;
        this.email = email;
        this.nationality = nationality;
    }

    play(): string{
        return "";
    };

    say(): string{
        return "";
    }

    toString(){
        return `${this.name} + ${this.email} + ${this.nationality}`
    }

}