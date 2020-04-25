import {CIterator} from './Iterator';

export interface Aggregator<T> {
    getIterator(): CIterator<T>;
}