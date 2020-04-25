import {Observer} from './Observer';
import {Subject} from './Subject';
import {ConcreteSubject} from './ConcreteSubject';

export class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        const concreteSubject = subject as ConcreteSubject;

        if (concreteSubject.state === 0 || concreteSubject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}