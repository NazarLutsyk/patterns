import {Builder} from './Builder';
import {Car} from './Car';
import {Engine} from './Engine';

export class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    reset(): CarBuilder {
        this.car.engine = null;
        this.car.gps = false;
        this.car.seats = 0;
        this.car.tripComputer = false;

        return this;
    }

    setEngine(engine: Engine): CarBuilder {
        this.car.engine = engine;

        return this;
    }

    setGPS(gps: boolean): CarBuilder {
        this.car.gps = gps;

        return this;
    }

    setSeats(count: number): CarBuilder {
        this.car.seats = count;

        return this;
    }

    setTripComputer(tripComputer: boolean): CarBuilder {
        this.car.tripComputer = tripComputer;

        return this;
    }

    build(): Car {
        return this.car;
    }
}