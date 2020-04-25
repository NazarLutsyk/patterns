import {Graphic} from './Graphic';

export class Circle implements Graphic {
    private x: number = 0;
    private y: number = 0;
    private radius: number = 0;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    draw(): void {
        console.log('Circle', this.x, this.y, this.radius);
    }
}