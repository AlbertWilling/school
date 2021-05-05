import {iHuman} from "../interfaces/iHuman";

export abstract class Human implements iHuman{

    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    playInstrument(instrument: string){
        switch (instrument) {
            case "nerves": return "Wrr!";
            case "guitar": return "plum plum";
            case "trumptet": return "tu trututu";
        }
    };

    shout(){

    }

    toString(){

    };

}