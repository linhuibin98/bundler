import { Graph } from "Graph";
import { Module } from "Module";

export interface BundleOptions {
    entry: string;
    output: string;
}

export class Bundle {
    graph: Graph;

    constructor(options: BundleOptions) {
        this.graph = new Graph({
            entry: options.entry,
            bundle: this,
        });
    }

    async build(){

    }

    async render() {

    }
    
    getModuleById(id: string) {
        return this.graph.getModuleById(id);
    }
    addModule(mod: Module) {
        return this.graph.addModule(mod);
    }
}