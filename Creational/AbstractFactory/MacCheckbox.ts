import {Button} from './Button';

export class MacCheckbox implements Button {
    public name: string;

    constructor(name: string) {
        this.name = 'Mac: ' + name;
    }

    paint(): void {
        console.log(this.name + ' checkbox painted');
    }
}