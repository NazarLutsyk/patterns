import {Remote} from './Remote';

export class AdvancedRemote extends Remote {
    public mute() {
        this.device.setVolume(0);
    }
}