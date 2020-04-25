import {Aggregator} from './Aggregator';
import {AlphabeticalOrderIterator} from './AlphabeticalOrderIterator';
import {CIterator} from './Iterator';

export class WordsCollection implements Aggregator<string> {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): CIterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): CIterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}