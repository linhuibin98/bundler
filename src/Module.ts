import MagicString from "magic-string";
import { ModuleLoader } from "./ModuleLoader";
import { Bundle } from "./Bundle";
import {parse, Node, } from 'acorn';
import {
    Declaration,
    SyntheticDefaultDeclaration,
    SyntheticNamespaceDeclaration
  } from './ast/Declaration';

interface ModuleOptions {
    path: string;
    code: string;
    bundle: Bundle;
    loader: ModuleLoader;
    isEntry: boolean;
}

interface ImportOrExportInfo {
    source?: string;
    localName: string;
    name: string;
    statement?: Node;
    isDeclaration?: boolean;
    module?: Module;
  }

type Imports = Record<string, ImportOrExportInfo>;
type Exports = Record<string, ImportOrExportInfo>;

export class Module {
    isEntry: boolean = false;
    id: string;
    path: string;
    bundle: Bundle;
    moduleLoader: ModuleLoader;
    code: string;
    magicString: MagicString;
    statements: Node[];
    imports: Imports;
    exports: Exports;
    reexports: Exports;
    exportAllSources: string[] = [];
    exportAllModules: Module[] = [];
    declarations: Record<string, Declaration>;
    dependencies: string[] = [];
    dependencyModules: Module[] = [];
    referencedModules: Module[] = [];

    constructor({ path, bundle, code, loader, isEntry = false }: ModuleOptions) {
        this.id = path;
        this.bundle = bundle;
        this.moduleLoader = loader;
        this.isEntry = isEntry;
        this.path = path;
        this.code = code;
        this.magicString = new MagicString(code);
        this.imports = {};
        this.exports = {};
        this.reexports = {};
        this.declarations = {};
        try {
            const ast = parse(code, {
                ecmaVersion: 'latest',
                sourceType: 'module',
            })
            const nodes = ast.body! as Node[]
        } catch(e) {
            console.error(e)
        }
    }
}
