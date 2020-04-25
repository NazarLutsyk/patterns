import {Engine} from './Engine';

export class SuperEngine implements Engine{
    public name: string;
    public power: number;

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }
}