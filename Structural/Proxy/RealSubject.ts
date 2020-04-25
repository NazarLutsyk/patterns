import {Subject} from './Subject';

export class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}