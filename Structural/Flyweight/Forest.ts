import {Tree} from './Tree';
import {TreeTypeFactory} from './TreeTypeFactory';

export class Forest {
    private trees: Array<Tree> = [];

    public platTree(x: number, y: number, name: string, color: string): void {
        const type = TreeTypeFactory.getTreeType(name, color);
        const tree = new Tree(x, y, type);

        this.trees.push(tree);
    }

    public draw(): void {
        this.trees.forEach(t => t.draw());
    }
}