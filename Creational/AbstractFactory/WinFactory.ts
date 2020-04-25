import {GUIFactory} from './GUIFactory';
import {Button} from './Button';
import {Checkbox} from './Checkbox';
import {WinButton} from './WinButton';
import {WinCheckbox} from './WinCheckbox';

export class WinFactory implements GUIFactory {
    public createButton(name: string): Button {
        return new WinButton(name);
    }

    public createCheckbox(name: string): Checkbox {
        return new WinCheckbox(name);
    }

}