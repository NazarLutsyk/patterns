import {Facade} from './Facade';
import {Subsystem1} from './Subsystem1';
import {Subsystem2} from './Subsystem2';

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

console.log(facade.operation());

