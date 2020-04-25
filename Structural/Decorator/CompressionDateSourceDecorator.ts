import {DateSourceDecorator} from './DateSourceDecorator';

export class CompressionDateSourceDecorator extends DateSourceDecorator {
    readData(): string {
        console.log('Decompress');
        return super.readData();
    }

    writeData(data: string): void {
        console.log('Compress');
        super.writeData(data);
    }
}