import {MonkeyHandler} from './MonkeyHandler';
import {SquirrelHandler} from './SquirrelHandler';
import {DogHandler} from './DogHandler';
import {Handler} from './Handler';

const monkeyHandler = new MonkeyHandler();
const squirrelHandler = new SquirrelHandler();
const dogHandler = new DogHandler();

monkeyHandler.setNext(squirrelHandler).setNext(dogHandler);

console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkeyHandler);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrelHandler);

function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'MeatBall','Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}