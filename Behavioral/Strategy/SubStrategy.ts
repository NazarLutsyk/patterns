import {Strategy} from './Strategy';

export class SubStrategy implements Strategy{
    execute(a: number, b: number): number {
        return a - b;
    }
}