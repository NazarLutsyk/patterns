import {Button} from './Button';

export class MacButton implements Button {
    public name: string;

    constructor(name: string) {
        this.name = 'Mac: ' + name;
    }

    paint(): void {
        console.log(this.name + ' button painted');
    }
}