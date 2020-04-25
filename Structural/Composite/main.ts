import {CompoundGraphic} from './CompoundGraphic';
import {Dot} from './Dot';
import {Circle} from './Circle';

const circleWithDot = new CompoundGraphic();
circleWithDot.add(new Dot(0, 0));
circleWithDot.add(new Circle(0, 0, 10));

const circle = new Circle(50, 50, 10);

const picture = new CompoundGraphic();
picture.add(circleWithDot);
picture.add(circle);

picture.draw();
picture.move(10, 10);
picture.draw();