import {TreeType} from './TreeType';

export class TreeTypeFactory {
    public static treeTypes: Array<TreeType> = [];

    public static getTreeType(name: string, color: string): TreeType {
        // @ts-ignore
        let treeType = TreeTypeFactory.treeTypes.find(t => t.name === name && t.color === color);

        if (Boolean(treeType) === false) {
            treeType = new TreeType(name, color);
            this.treeTypes.push(treeType);
        }

        return treeType;
    }

}