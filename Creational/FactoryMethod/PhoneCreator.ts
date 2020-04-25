import {ProductCreator} from './ProductCreator';
import {Product} from './Product';
import {Phone} from './Phone';

export class PhoneCreator extends ProductCreator {
    public factoryMethod(name: string): Product {
        return new Phone(name);
    }
}