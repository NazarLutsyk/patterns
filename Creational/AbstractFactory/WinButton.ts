import {Button} from './Button';

export class WinButton implements Button {
    public name: string;

    constructor(name: string) {
        this.name = 'Win: ' + name;
    }

    paint(): void {
        console.log(this.name + ' button painted');
    }
}