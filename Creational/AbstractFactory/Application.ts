import {GUIFactory} from './GUIFactory';
import {Button} from './Button';
import {Checkbox} from './Checkbox';

export class Application {
    private guiFactory: GUIFactory;
    private buttons: Array<Button>;
    private checkboxes: Array<Checkbox>;

    constructor(guiFactory: GUIFactory) {
        this.guiFactory = guiFactory;
        this.buttons = [];
        this.checkboxes = [];
    }

    public createUI(): void {
        this.buttons.push(this.guiFactory.createButton('Cool'));
        this.buttons.push(this.guiFactory.createButton('Awesome'));
        this.checkboxes.push(this.guiFactory.createCheckbox('Good'));
        this.checkboxes.push(this.guiFactory.createCheckbox('Bad'));
    }

    public paint(): void {
        this.buttons.forEach(b => b.paint());
        this.checkboxes.forEach(c => c.paint());
    }
}