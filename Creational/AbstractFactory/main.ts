import {MacFactory} from './MacFactory';
import {WinFactory} from './WinFactory';
import {Application} from './Application';

const macFactory = new MacFactory();
const winFactory = new WinFactory();

const macApplication = new Application(macFactory);
const winApplication = new Application(winFactory);

macApplication.createUI();
macApplication.paint();

winApplication.createUI();
winApplication.paint();