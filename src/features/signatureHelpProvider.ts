'use strict';

import * as vscode from 'vscode';

import { LuaFunction } from '../defs/defs';

import { luaClasses, luaFunctions } from '../defs/lualibs';

export class signatureProvider implements vscode.SignatureHelpProvider {
    functions: { [key: string]: LuaFunction };

    constructor(extensionPath: string) {
        this.functions = {};

        this.addLuaLibs();
    }

    addLuaLibs()
    {
        for(let i in luaClasses)
        {
            let itype = luaClasses[i];
            for(let j in itype.methods)
            {
                let jmethod = itype.methods[j];
                this.functions[itype.label + "." + jmethod.label] =  jmethod;
            }
        }

        for(let i in luaFunctions)
        {
            let idef:LuaFunction = luaFunctions[i];
            this.functions[idef.label] = idef;            
        }
    }

    provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.SignatureHelp | Thenable<vscode.SignatureHelp> {
        return new Promise<vscode.SignatureHelp>((resolve, reject) => {
            if (!vscode.workspace.getConfiguration("starbound-sense").get("activate_signature_help", true))
                reject();
                
            // ! This is really freaky code.. But works. Would be easier if we would use a language server :(
            let lastCharacter = document.getText(new vscode.Range(new vscode.Position(position.line, position.character-1), position));
            let offset = 0;
            let parameter = 0;
            // methodName( <-- cursor is here
            if(lastCharacter == "(")
                offset = 1;
            else
            {
                // Cursor is maybe somewhere inside the function.
                let line = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
                for(let charIndex = line.length; charIndex > 0; charIndex--)
                {
                    var c = line.charAt(charIndex);
                    if(c == ",") // counts how many commas are before our cursor
                        parameter++;

                    if(c != "(") // go back until we hit our parentheses
                        offset++;
                    else // parentheses found, bail out.
                        break;
                }
            }

            var wordRange = document.getWordRangeAtPosition(new vscode.Position(position.line, position.character-offset), /[\w\.]+/);
            if(wordRange == undefined)
            {
                reject();
                return;
            }
            
            var word = document.getText(wordRange);
            if(word == undefined)
            {
                reject();
                return;
            }

            var funct = this.functions[word];
            if(funct == undefined)
            {
                reject();
                return;
            }

            let ret = new vscode.SignatureHelp();
            ret.activeParameter = parameter;
            ret.activeSignature = 0;
            ret.signatures = new Array<vscode.SignatureInformation>();

            // TODO: Handle having 2 functions with different parameters
            //def.documentation.appendCodeblock(def.label + " ( " + idef.args.join(", ") + " )", "starboundlua");
            var signature = new vscode.SignatureInformation(funct.label + " ( " + funct.args.join(", ") + " )", new vscode.MarkdownString(funct.description));
            for(var i in funct.args)
            {
                var iarg = funct.args[i];
                signature.parameters.push(new vscode.ParameterInformation(iarg, ""));
            }

            ret.signatures.push(signature);
            resolve(ret);
        });
    }
}