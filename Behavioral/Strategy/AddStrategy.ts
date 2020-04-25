import {Strategy} from './Strategy';

export class AddStrategy implements Strategy{
    execute(a: number, b: number): number {
        return a + b;
    }
}