import {TV} from './TV';
import {Remote} from './Remote';
import {AdvancedRemote} from './AdvancedRemote';
import {Radio} from './Radio';

const tv = new TV()
const remoteTV = new Remote(tv)
remoteTV.togglePower();

const radio = new Radio()
const remoteRadio = new AdvancedRemote(radio)
remoteRadio.togglePower();
remoteRadio.channelUp();