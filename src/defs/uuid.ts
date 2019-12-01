'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var UuidClassDefinition : LuaClass;

let tmpDef :LuaMethod;

UuidClassDefinition = new LuaClass("uuid");
UuidClassDefinition.description = "The uuid API is a very simple library for creating 128 bit random identifiers.";

tmpDef = new LuaMethod("next");
tmpDef.description = "Returns 128 bit random identifiers, represented as a hex value in a string grouped by 8, 4, 4, 4, and 12 hex characters, separated by dashes.\ne.g. 34eb7b28-14d3-4767-b326-dd1609ba92e. You might recognize this pattern as it is the same used for component addressing.";
tmpDef.returnType = "string";
tmpDef.module = "uuid";
UuidClassDefinition.methods.push(tmpDef);