'use strict';
import * as vscode from 'vscode';
//import * as path from 'path';

import { LuaFunction, LuaConst } from '../defs/defs';

import { luaClasses, luaConsts, luaFunctions } from '../defs/lualibs';
import { OpenComputerDefinitions, OpenComputerClassDefinitions } from '../defs/ocDefs';

export class functionProvider {
    functions: { [key: string]: vscode.CompletionItem[] };
    clientGlobalTypes: vscode.CompletionItem[];
    serverGlobalTypes: vscode.CompletionItem[];

    globalTypes: vscode.CompletionItem[];

    constructor(extensionPath: string) {
        this.functions = {};
        this.globalTypes = new Array<vscode.CompletionItem>();
        this.clientGlobalTypes = new Array<vscode.CompletionItem>();
        this.serverGlobalTypes = new Array<vscode.CompletionItem>();

        for (let i in OpenComputerClassDefinitions) {
            let itype = OpenComputerClassDefinitions[i];

            let def = new vscode.CompletionItem(itype.label, vscode.CompletionItemKind.Class);
            def.documentation = new vscode.MarkdownString();
            def.documentation.appendMarkdown(itype.description);
            this.globalTypes.push(def);

            this.functions[itype.label] = new Array<vscode.CompletionItem>();
            for (let j in itype.methods) {
                let jmethod = itype.methods[j];

                let def = new vscode.CompletionItem(jmethod.label, vscode.CompletionItemKind.Method);
                def.documentation = jmethod.toMarkdown();

                this.functions[itype.label].push(def);
            }

            for (let j in itype.fields) {
                let jfield = itype.fields[j];
                let jkind = vscode.CompletionItemKind.Field;
                if (jfield instanceof LuaConst)
                    jkind = vscode.CompletionItemKind.Constant;

                let def = new vscode.CompletionItem(jfield.label, jkind);
                def.documentation = jfield.toMarkdown();

                this.functions[itype.label].push(def);
            }
        }

        this.addLuaLibs();
    }

    addLuaLibs() {
        // Built-in lua functions (print etc.)
        for (let i in luaFunctions) {
            let itype = luaFunctions[i];

            let def = new vscode.CompletionItem(itype.label, vscode.CompletionItemKind.Function);
            def.documentation = itype.toMarkdown();

            this.globalTypes.push(def);
        }

        // Built-in lua "modules" (table.concat)
        for (let i in luaClasses) {
            let itype = luaClasses[i];

            let def = new vscode.CompletionItem(itype.label, vscode.CompletionItemKind.Class);
            def.documentation = new vscode.MarkdownString();
            def.documentation.appendMarkdown(itype.description);
            this.globalTypes.push(def);

            this.functions[itype.label] = new Array<vscode.CompletionItem>();
            for (let j in itype.methods) {
                let jmethod = itype.methods[j];

                let def = new vscode.CompletionItem(jmethod.label, vscode.CompletionItemKind.Method);
                def.documentation = jmethod.toMarkdown();

                this.functions[itype.label].push(def);
            }

            for (let j in itype.fields) {
                let jfield = itype.fields[j];
                let jkind = vscode.CompletionItemKind.Field;
                if (jfield instanceof LuaConst)
                    jkind = vscode.CompletionItemKind.Constant;

                let def = new vscode.CompletionItem(jfield.label, jkind);
                def.documentation = jfield.toMarkdown();

                this.functions[itype.label].push(def);
            }
        }

        for (let i in luaConsts) {
            let iconst = luaConsts[i];

            let def = new vscode.CompletionItem(iconst.label, vscode.CompletionItemKind.Constant);
            def.documentation = iconst.toMarkdown();
            this.globalTypes.push(def);
        }
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken,
        context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            if (context.triggerKind != vscode.CompletionTriggerKind.TriggerCharacter) {
                let funcs = this.globalTypes;
                resolve(funcs);
                return;
            }

            var wordRange = document.getWordRangeAtPosition(new vscode.Position(position.line, position.character - 1));
            if (wordRange != undefined) {
                var word = document.getText(wordRange);
                resolve(this.functions[word]);
                return;
            }

            resolve([]);
        });
    }
}