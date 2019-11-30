'use strict';

import * as fs from 'fs';
import * as path from 'path';


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