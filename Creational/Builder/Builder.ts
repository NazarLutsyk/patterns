import {Car} from './Car';
import {Engine} from './Engine';

export interface Builder {
    reset: () => Builder;
    setSeats: (count: number) => Builder;
    setEngine: (engine: Engine) => Builder;
    setTripComputer: (tripComputer: boolean) => Builder;
    setGPS: (gps: boolean) => Builder;
    build: () => Car;
}