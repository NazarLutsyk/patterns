export interface CIterator<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;

    rewind(): void;
}