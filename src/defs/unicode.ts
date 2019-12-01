'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var UnicodeClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:unicode

UnicodeClassDefinition = new LuaClass("unicode");
UnicodeClassDefinition.description = "Because all strings pass through Java at some point it can be useful to handle them with Unicode support (since Java's internal string representation is UTF-8 encoded). In particular, screens display UTF-8 strings, meaning the related GPU functions expect UTF-8 strings. Also, keyboard input will generally be UTF-8 encoded, especially the clipboard.\n\nHowever, keep in mind that while wide characters can be displayed, input and output of those is not fully supported in OpenOS's software (i.e. the shell, edit and Lua interpreter). ";

tmpDef = new LuaMethod("char");
tmpDef.description = "UTF-8 aware version of string.char. The values may be in the full UTF-8 range, not just ASCII.";
tmpDef.args = ["value", "..."];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("charWidth");
tmpDef.description = "Returns the width of the first character given. For example, for シ it'll return 2, where a would return 1.";
tmpDef.args = ["value", "..."];
tmpDef.returnType = "number";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("isWide");
tmpDef.description = "Returns if the width of the first character given is greater than 1. For example, for シ it'll return true, where a would return false.";
tmpDef.args = ["value", "..."];
tmpDef.returnType = "boolean";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("len");
tmpDef.description = "UTF-8 aware version of string.len. For example, for Ümläüt it'll return 6, where string.len would return 9.";
tmpDef.args = ["value"];
tmpDef.returnType = "number";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("lower");
tmpDef.description = "UTF-8 aware version of string.lower.";
tmpDef.args = ["value"];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("reverse");
tmpDef.description = "UTF-8 aware version of string.reverse. For example, for Ümläüt it'll return tüälmÜ, where string.reverse would return tälm.";
tmpDef.args = ["value"];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("sub");
tmpDef.description = "UTF-8 aware version of string.sub.";
tmpDef.args = ["value", "i", "[j]"];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("upper");
tmpDef.description = "UTF-8 aware version of string.upper.";
tmpDef.args = ["value"];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("wlen");
tmpDef.description = "Returns the width of the entire string.";
tmpDef.args = ["value"];
tmpDef.returnType = "number";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("wtrunc");
tmpDef.description = "Truncates the given string up to but not including count width. If there are not enough characters to match the wanted width, the function errors.";
tmpDef.args = ["value", "count"];
tmpDef.returnType = "string";
tmpDef.module = UnicodeClassDefinition.label;
UnicodeClassDefinition.methods.push(tmpDef);