import {Product} from './Product';

export abstract class ProductCreator {
    public abstract factoryMethod(...args): Product;
}