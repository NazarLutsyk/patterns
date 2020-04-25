import {Product} from './Product';

export class Phone implements Product{
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public call(): void{
        console.log(this.name, 'Din din din!');
    }
}