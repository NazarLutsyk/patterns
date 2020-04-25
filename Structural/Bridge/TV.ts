import {Device} from './Device';

export class TV implements Device {
    private enabled = false;
    private channel = undefined;
    private volume = 0;

    disable(): void {
        console.log('TV');
        this.enabled = false;
    }

    enable(): void {
        console.log('TV');
        this.enabled = true;
    }

    getChannel(): number {
        console.log('TV');
        return this.channel;
    }

    getVolume(): number {
        console.log('TV');
        return this.volume;
    }

    isEnabled(): boolean {
        console.log('TV');
        return this.enabled;
    }

    setChannel(channel: number): void {
        console.log('TV');
        this.channel = channel;
    }

    setVolume(percent: number): void {
        console.log('TV');
        this.volume = percent;
    }

}