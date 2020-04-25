import {Button} from './Button';

export class WinCheckbox implements Button {
    public name: string;

    constructor(name: string) {
        this.name = 'Win: ' + name;
    }

    paint(): void {
        console.log(this.name + ' checkbox painted');
    }
}