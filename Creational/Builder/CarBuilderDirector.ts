import {CarBuilder} from './CarBuilder';
import {Car} from './Car';
import {SuperEngine} from './SuperEngine';

export class CarBuilderDirector {
    buildSportCar(builder: CarBuilder): Car {
        return builder
            .setEngine(new SuperEngine('Super', 1000))
            .setSeats(2)
            .setGPS(false)
            .setTripComputer(false)
            .build();
    }
}