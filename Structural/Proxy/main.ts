import {RealSubject} from './RealSubject';
import {SubjectProxy} from './Proxy';

console.log('Client: Executing the client code with a real subject:');

const realSubject = new RealSubject();
realSubject.request();


console.log('');

console.log('Client: Executing the same client code with a proxy:');

const proxy = new SubjectProxy(realSubject);
proxy.request();
