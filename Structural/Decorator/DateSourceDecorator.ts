import {DataSource} from './DataSource';

export class DateSourceDecorator implements DataSource {
    protected wrappee: DataSource;

    constructor(wrappee: DataSource) {
        this.wrappee = wrappee;
    }

    readData(): string {
        return this.wrappee.readData();
    }

    writeData(data: string): void {
        this.wrappee.writeData(data);
    }
}