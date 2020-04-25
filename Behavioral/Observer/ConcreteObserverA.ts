import {Observer} from './Observer';
import {Subject} from './Subject';
import {ConcreteSubject} from './ConcreteSubject';

export class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        const concreteSubject = subject as ConcreteSubject;

        if (concreteSubject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}