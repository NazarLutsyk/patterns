import {Application} from './Application';
import {Editor} from './Editor';

export abstract class Command {
    protected app: Application;
    protected editor: Editor;
    protected backup: string;

    constructor(app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    public saveBackup(): void {
        this.backup = this.editor.text;
    }

    public undo(): void {
        this.editor.text = this.backup;
    }

    public abstract execute(): boolean;
}