'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var TransformsClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:transforms

TransformsClassDefinition = new LuaClass("transforms");
TransformsClassDefinition.description = "The transforms library is set of utilities for working with indexed tables. It provides highly reusable special iterators that are at the core of text and sh command parsing. ";

tmpDef = new LuaMethod("sub");
tmpDef.description = "Behaves similarly to string.sub. Returns a sub table of tbl from first to last. ";
tmpDef.args = ["tbl", "first", "last"];
tmpDef.returnType = "table";
tmpDef.module = TransformsClassDefinition.label;
TransformsClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("first");
tmpDef.description = " Returns the first index in tbl (between indexes first and last, inclusively) where predicate is satisfied. The 2nd return is also the ending index of the match. General examples will have the same two values returned, i.e. a match of length 1. The predicate can (optionally) return a 2nd return value to indicate the size of the match.\n\nIn the case that predicate is a table, transforms.first() returns the starting and ending index of the first matching sub table in tbl that matches ANY one of the tables in predicate. ";
tmpDef.args = ["tbl", "predicate", "first", "last"];
tmpDef.returnType = "number, number";
tmpDef.module = TransformsClassDefinition.label;
TransformsClassDefinition.methods.push(tmpDef);