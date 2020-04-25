import {RoundHole} from './RoundHole';
import {RoundPeg} from './RoundPeg';
import {SquarePeg} from './SquarePeg';
import {SquarePegAdapter} from './SquarePegAdapter';

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);

console.log(hole.fits(roundPeg));

const smallSquarePeg = new SquarePeg(5);
const bigSquarePeg = new SquarePeg(10);

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const bigSquarePegAdapter = new SquarePegAdapter(bigSquarePeg);

console.log(hole.fits(smallSquarePegAdapter));
console.log(hole.fits(bigSquarePegAdapter));