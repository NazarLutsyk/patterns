import {Graphic} from './Graphic';

export class CompoundGraphic implements Graphic {
    private children: Array<Graphic> = [];

    add(child: Graphic): void {
        this.children.push(child);
    }

    draw(): void {
        this.children.forEach(c => c.draw());
    }

    move(x: number, y: number): void {
        this.children.forEach(c => c.move(x, y))
    }

}