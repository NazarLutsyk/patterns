export class TreeType {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    draw(x, y): void {
        console.log(this.name, this.color, x, y);
    }
}