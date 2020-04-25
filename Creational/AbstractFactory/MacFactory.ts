import {GUIFactory} from './GUIFactory';
import {Button} from './Button';
import {Checkbox} from './Checkbox';
import {MacCheckbox} from './MacCheckbox';
import {MacButton} from './MacButton';

export class MacFactory implements GUIFactory {
    public createButton(name: string): Button {
        return new MacButton(name);
    }

    public createCheckbox(name: string): Checkbox {
        return new MacCheckbox(name);
    }

}