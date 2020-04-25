import {FileDataSource} from './FileDataSource';
import {CompressionDateSourceDecorator} from './CompressionDateSourceDecorator';
import {EncryptionDateSourceDecorator} from './EncryptionDateSourceDecorator';

// const fileDataSource = new FileDataSource('file');
// fileDataSource.writeData('hello world');
// fileDataSource.readData();
//
// const compressionDateSourceDecorator = new CompressionDateSourceDecorator(fileDataSource);
// compressionDateSourceDecorator.writeData('hello world');
// compressionDateSourceDecorator.readData();
//
// const encryptionDateSourceDecorator = new EncryptionDateSourceDecorator(fileDataSource);
// encryptionDateSourceDecorator.writeData('hello world');
// encryptionDateSourceDecorator.readData();

const fileDataSource = new FileDataSource('file');
const compressionDateSourceDecorator = new CompressionDateSourceDecorator(fileDataSource);
const encryptionDateSourceDecorator = new EncryptionDateSourceDecorator(compressionDateSourceDecorator);

encryptionDateSourceDecorator.writeData('hello world');
encryptionDateSourceDecorator.readData();
