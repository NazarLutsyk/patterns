import {Command} from './Command';

export class UndoCommand extends Command {
    execute(): boolean {
        this.undo();
        return false;
    }
}