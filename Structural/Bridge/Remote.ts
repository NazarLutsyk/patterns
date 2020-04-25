import {Device} from './Device';

export class Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable()
        } else {
            this.device.enable()
        }
    }

    public volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10)
    }

    public volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10)
    }

    public channelDown() {
        this.device.setChannel(this.device.getChannel() - 1)
    }

    public channelUp() {
        this.device.setChannel(this.device.getChannel() + 1)
    }
}