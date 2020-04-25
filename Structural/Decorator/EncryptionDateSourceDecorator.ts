import {DateSourceDecorator} from './DateSourceDecorator';

export class EncryptionDateSourceDecorator extends DateSourceDecorator {
    readData(): string {
        console.log('Decrypt');
        return super.readData();
    }

    writeData(data: string): void {
        console.log('Encrypt');
        super.writeData(data);
    }
}