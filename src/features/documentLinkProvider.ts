'use strict';

import * as vscode from 'vscode';

export class documentLinkProvider implements vscode.DocumentLinkProvider {
    globalTypes: string[];

    constructor(extensionPath: string) {
        this.globalTypes = new Array<string>();
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
                    let docRange = document.getWordRangeAtPosition(document.positionAt(documentText.indexOf(v, currentOffset - 1)));
                    let range = docRange !== undefined ? docRange : new vscode.Range(new vscode.Position(0,0), new vscode.Position(0,0));

                    //if(docLink !== "")
                    result.push(new vscode.DocumentLink(range,
                        vscode.Uri.parse("https://wiki.multitheftauto.com/wiki/" + v)));
                }
            });
            currentOffset += lineText.text.length;
        }
        return result;
    }
};