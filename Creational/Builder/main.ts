import {CarBuilder} from './CarBuilder';
import {CarBuilderDirector} from './CarBuilderDirector';

const carBuilder = new CarBuilder();
const carBuilderDirector = new CarBuilderDirector();

const car = carBuilderDirector.buildSportCar(carBuilder);
console.log(car);