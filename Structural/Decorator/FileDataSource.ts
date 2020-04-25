import {DataSource} from './DataSource';

export class FileDataSource implements DataSource {
    private data: string;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    writeData(data: string): void {
        console.log('Write to', this.filename);
        this.data = data;
    }

    readData(): string {
        console.log('Read', this.data, 'from', this.filename);
        return this.data;
    }
}