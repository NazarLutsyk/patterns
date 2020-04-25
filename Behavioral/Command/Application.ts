import {CopyCommand} from './CopyCommand';
import {Editor} from './Editor';
import {PasteCommand} from './PasteCommand';

export class Application {
    public clipboard: string;
    private editor: Editor = new Editor();

    copyText(): void {
        const copyCommand = new CopyCommand(this, this.editor);
        copyCommand.execute();
    }

    pasteText(): void {
        const pasteCommand = new PasteCommand(this, this.editor);
        pasteCommand.execute();
    }
}