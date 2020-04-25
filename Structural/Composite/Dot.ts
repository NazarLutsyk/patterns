import {Graphic} from './Graphic';

export class Dot implements Graphic {
    private x: number = 0;
    private y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    draw(): void {
        console.log('Dot', this.x, this.y);
    }
}