import {Button} from './Button';
import {Checkbox} from './Checkbox';

export interface GUIFactory {
    createButton: (name: string) => Button;
    createCheckbox: (name: string) => Checkbox;
}