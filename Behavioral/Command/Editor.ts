export class Editor {
    text: string;
    private selection: string;

    public getSelection(): string {
        return this.selection;
    }

    public deleteSelection(): void {
        this.text.replace(this.selection, '');
        this.selection = '';
    }

    public replaceSelection(text: string): void {
        this.selection = text;
    }
}