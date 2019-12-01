'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var SerializationClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:serialization

SerializationClassDefinition = new LuaClass("serialization");
SerializationClassDefinition.description = "This module provides simple value serialization. ";

tmpDef = new LuaMethod("serialize");
tmpDef.description = "Generates a string from an object that can be parsed again using serialization.unserialize. The generated output is Lua code. Supports basic types (nil, boolean, number, string) and tables without cycles (will error out when cycles are detected, unless in pretty print mode). Properly handles NaN values and infinity.\nThe pretty mode can be used to generate output for display to the user, this output will in most circumstances not be readable with serialization.unserialize.\nThe value of pretty defines the number of entries that will be printed.\nIf pretty is set to true it will by default print 10 entries.\nThis function can be useful for sending messages via a network card.";
tmpDef.args = ["value", "[pretty]"];
tmpDef.returnType = "string";
tmpDef.module = "serialization";
SerializationClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("unserialize");
tmpDef.description = "Restores an object previously saved with serialization.serialize.";
tmpDef.args = ["value"];
tmpDef.returnType = "any";
tmpDef.module = "serialization";
SerializationClassDefinition.methods.push(tmpDef);