import {Device} from './Device';

export class Radio implements Device {
    private enabled = false;
    private channel = undefined;
    private volume = 0;

    disable(): void {
        console.log('Radio');
        this.enabled = false;
    }

    enable(): void {
        console.log('Radio');
        this.enabled = true;
    }

    getChannel(): number {
        console.log('Radio');
        return this.channel;
    }

    getVolume(): number {
        console.log('Radio');
        return this.volume;
    }

    isEnabled(): boolean {
        console.log('Radio');
        return this.enabled;
    }

    setChannel(channel: number): void {
        console.log('Radio');
        this.channel = channel;
    }

    setVolume(percent: number): void {
        console.log('Radio');
        this.volume = percent;
    }

}