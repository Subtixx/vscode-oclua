'use strict';

import * as fs from 'fs';
import * as path from 'path';
import { OpenComputerClassDefinitions } from './defs/ocDefs';


// Helper function.
export function walkSync(currentDirPath: string, callback: { (file: string, stat: fs.Stats): void; }) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

export function generateSyntaxMethods(): string {
    let endStr: string = "\\\\b(";
    for (let i in OpenComputerClassDefinitions) {
        let itype = OpenComputerClassDefinitions[i];
        if(itype.methods.length > 0)
        {
            endStr += itype.label + "\\\\.("
            for (let y in itype.methods) {
                let ytype = itype.methods[y];
                endStr += ytype.label;
                if (itype.methods.indexOf(ytype) < itype.methods.length-1) {
                    endStr += "|";
                }
            }
            endStr += ")";
        }

        if(OpenComputerClassDefinitions.indexOf(itype) < OpenComputerClassDefinitions.length-1)
            endStr += "|";
    }
    endStr += ")";
    return endStr;
}

export function generateSyntaxFields(): string {
    let endStr: string = "\\\\b(";

    let j = 1;
    let k = 0;
    for (let i in OpenComputerClassDefinitions) {
        let itype = OpenComputerClassDefinitions[i];
        if(itype.fields.length == 0) continue;
        k++;
    }
    console.log(j + ", " + k);
    
    for (let i in OpenComputerClassDefinitions) {
        let itype = OpenComputerClassDefinitions[i];
        if(itype.fields.length == 0) continue;
        endStr += itype.label + "\\\\.("
        for (let y in itype.fields) {
            let ytype = itype.fields[y];
            endStr += ytype.label;
            if (itype.fields.indexOf(ytype) != itype.fields.length-1) {
                endStr += "|";
            }
        }
        endStr += ")";

        if(j<k)
            endStr += "|";
        j++;
    }
    endStr += ")\\b(?=\\s*(?:[({\"']|\\[\\[))";
    return endStr;
}

export function generateSampleFile() : string {
    let endStr: string = "";
    for (let i in OpenComputerClassDefinitions) {
        let itype = OpenComputerClassDefinitions[i];
        for (let y in itype.methods) {
            let ytype = itype.methods[y];
            endStr += ytype.module+"."+ytype.label + "()\n";
        }
        for (let y in itype.fields) {
            let ytype = itype.fields[y];
            endStr += itype.label+"."+ytype.label + "\n";
        }
    }
    return endStr;
}