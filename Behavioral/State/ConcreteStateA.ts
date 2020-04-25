import {State} from './State';
import {ConcreteStateB} from './ConcreteStateB';

export class ConcreteStateA extends State {

    handle1(): void {
        console.log('ConcreteStateA handles request1.');
        console.log('ConcreteStateA wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateB());
    }

    handle2(): void {
        console.log('ConcreteStateA handles request2.');
    }
}