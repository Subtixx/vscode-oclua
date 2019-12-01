'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var TextClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:text

TextClassDefinition = new LuaClass("text");
TextClassDefinition.description = "This API provides some more general operations on strings and data serialization into and back from strings.";

tmpDef = new LuaMethod("detab");
tmpDef.description = "Converts tabs in a string to spaces, while aligning the tags at the specified tab width. This is used for formatting text in term.write, for example.";
tmpDef.args = ["value", "tabWidth"];
tmpDef.returnType = "string";
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("padRight");
tmpDef.description = "Pads a string with whitespace on the right up to the specified length.";
tmpDef.args = ["value", "length"];
tmpDef.returnType = "string";
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("padLeft");
tmpDef.description = "Pads a string with whitespace on the left up to the specified length.";
tmpDef.args = ["value", "length"];
tmpDef.returnType = "string";
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("trim");
tmpDef.description = "Removes whitespace characters from the start and end of a string.";
tmpDef.args = ["value"];
tmpDef.returnType = "string";
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("wrap");
tmpDef.description = "Wraps the provided string to specified width.";
tmpDef.args = ["value", "width", "maxWidth"];
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("wrappedLines");
tmpDef.description = "Returns a wrapper function around text.wrap.";
tmpDef.args = ["value", "width", "maxWidth"];
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("tokenize");
tmpDef.description = "Splits the input string into a table, using space as the delimiter.";
tmpDef.args = ["value"];
tmpDef.module = TextClassDefinition.label;
TextClassDefinition.methods.push(tmpDef);