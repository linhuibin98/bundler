import { dirname, resolve } from 'path';
import {Module} from './Module';
import { Bundle } from './Bundle';

interface GraphOptions {
    entry: string;
    bundle: Bundle;
}

// 模块依赖图对象的实现
export class Graph {
    entryPath: string;
    basedir: string;
    bundle: Bundle;
    moduleById: Record<string, Module> = {};
    modules: Module[] = [];

    constructor(options: GraphOptions) {
        const { entry, bundle } = options
        this.entryPath = resolve(entry)
        this.basedir = dirname(this.entryPath);
        this.bundle = bundle;
    }

    async build() {
        // 1. 获取并解析模块信息
        // 2. 构建依赖关系图
        // 3. 依赖拓扑排序
        // 4. Tree Shaking 标记需要包含的语句
    }

    getModuleById(id: string) {
        return this.moduleById[id];
    }

    addModule(mod: Module) {
        if (!this.moduleById[mod.id]) {
          this.moduleById[mod.id] = mod;
          this.modules.push(mod);
        }
    }
}