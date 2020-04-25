import {Product} from './Product';

export class Speaker implements Product {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public play(): void {
        console.log(this.name, 'La la la!');
    }
}