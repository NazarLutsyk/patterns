import {Context} from './Context';
import {AddStrategy} from './AddStrategy';
import {SubStrategy} from './SubStrategy';

const context = new Context();
context.setStrategy(new AddStrategy())
console.log(context.executeStrategy(5, 5));
context.setStrategy(new SubStrategy())
console.log(context.executeStrategy(5, 5));