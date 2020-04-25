import {PhoneCreator} from './PhoneCreator';
import {SpeakerCreator} from './SpeakerCreator';
import {Phone} from './Phone';
import {Speaker} from './Speaker';

const phoneCreator = new PhoneCreator();
const speakerCreator = new SpeakerCreator();

const samsung = phoneCreator.factoryMethod('Samsung') as Phone;
const huawei = phoneCreator.factoryMethod('Huawei') as Phone;

const edifier = speakerCreator.factoryMethod('EDIFIER') as Speaker
const sl = speakerCreator.factoryMethod('SL') as Speaker;

samsung.call();
huawei.call();

edifier.play();
sl.play();