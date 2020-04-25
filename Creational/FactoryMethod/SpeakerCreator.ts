import {ProductCreator} from './ProductCreator';
import {Product} from './Product';
import {Speaker} from './Speaker';

export class SpeakerCreator extends ProductCreator {
    public factoryMethod(name: string): Product {
        return new Speaker(name);
    }
}