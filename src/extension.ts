'use strict';

import * as vscode from 'vscode'
import { functionProvider } from './features/completionItemProvider';
import { signatureProvider } from './features/signatureHelpProvider';
import { hoverProvider } from './features/hoverProvider';
import { documentLinkProvider } from './features/documentLinkProvider';
//import { generateSyntaxFields, generateSyntaxMethods, generateSampleFile } from './utils';

export function activate(context: vscode.ExtensionContext) {
	vscode.debug.activeDebugConsole.appendLine("Loaded!");
	console.log("OpenComputers LUA: Init");
	
	vscode.languages.registerDocumentLinkProvider({ scheme: "file", language: "oclua" }, new documentLinkProvider(context.extensionPath));

	// Register the built-in function definitions
	vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "oclua" }, new functionProvider(context.extensionPath), ".");
	vscode.languages.registerHoverProvider({ scheme: "file", language: "oclua" }, new hoverProvider(context.extensionPath));
	
	vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "oclua" }, new signatureProvider(context.extensionPath), "(");

	//console.log(generateSyntaxFields());
	//console.log(generateSyntaxMethods());
	//console.log(generateSampleFile());
}

export function deactivate() {
	console.log("OpenComputers LUA: Free");
}