import {RoundPeg} from './RoundPeg';

export class RoundHole {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public fits(peg: RoundPeg): boolean {
        return this.radius >= peg.getRadius();
    }
}