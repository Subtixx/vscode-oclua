'use strict';

import * as vscode from 'vscode';
import { OpenComputerClassDefinitions } from '../defs/ocDefs';

export class documentLinkProvider implements vscode.DocumentLinkProvider {
    globalTypes: string[];
    globalTypes2 : { [key: string]: string };

    constructor(extensionPath: string) {
        this.globalTypes = new Array<string>();
        this.globalTypes2 = {};

        for (let i in OpenComputerClassDefinitions) {
            let itype = OpenComputerClassDefinitions[i];
            this.globalTypes.push(itype.label);

            for(let y in itype.methods)
            {
                let ymethod = itype.methods[y];
                this.globalTypes2[itype.label+"."+ymethod.label] = ymethod.docLink != "" ? ymethod.docLink : "https://ocdoc.cil.li/api:" +itype.label;
                this.globalTypes.push(itype.label+"."+ymethod.label);
            }

            for(let y in itype.fields)
            {
                let yfield = itype.fields[y];
                this.globalTypes2[itype.label+"."+yfield.label] = "https://ocdoc.cil.li/api:"+itype.label;
                this.globalTypes.push(itype.label+"."+yfield.label);
            }
        }
    }

    provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink[]> {
        let result: vscode.DocumentLink[] = new Array<vscode.DocumentLink>();
        let documentText = document.getText();

        let currentOffset = 0;
        for (let i = 0; i < document.lineCount; i++) {
            let lineText = document.lineAt(i);
            let lineSplitted = lineText.text.split(/[(, \t]/);
            lineSplitted.forEach((v) => {
                if (v == "") return;
                if (this.globalTypes.indexOf(v) > -1){
                    let docRange = document.getWordRangeAtPosition(document.positionAt(documentText.indexOf(v, currentOffset)));
                    let range = docRange !== undefined ? docRange : new vscode.Range(new vscode.Position(0,0), new vscode.Position(0,0));
                    if(this.globalTypes2[v] !== undefined)
                    {
                        if(this.globalTypes2[v] != "")
                        {
                            result.push(new vscode.DocumentLink(range,
                                vscode.Uri.parse(this.globalTypes2[v])));
                        }else{
                            result.push(new vscode.DocumentLink(range,
                                vscode.Uri.parse("https://ocdoc.cil.li/api:" + v)));
                        }
                    }else{
                        result.push(new vscode.DocumentLink(range,
                            vscode.Uri.parse("https://ocdoc.cil.li/api:" + v)));
                    }
                }
            });
            currentOffset += lineText.text.length+1;
        }
        return result;
    }
};